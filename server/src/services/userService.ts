import TokenService from './tokenService';
import ApiError from '../errors/apiErrors';
import { JwtPayload } from 'jsonwebtoken';
import { prisma } from '../config/prisma';
import LdapService from './ldapService';
import { TUser } from 'types';

export default class UserService {
  /**
   * User login
   * @param username string
   * @param password string
   * @returns
   */
  static async login(username: string, password: string): Promise<TUser> {
    const userData = await LdapService.ldapLogin(username, password);

    // sukuriam tokenus
    const tokens = TokenService.generateTokens(userData);

    // irasom refreshToken i db
    // jei yra senas, istrinam ji
    await prisma.jwt.deleteMany({
      where: {
        user_id: userData.userId,
      },
    });

    await prisma.jwt.create({
      data: {
        user_id: userData.userId,
        username: userData.username,
        display_name: userData.displayName,
        division: userData.division,
        role: userData.role,
        refresh_token: tokens.refreshToken,
      },
    });

    return {
      ...tokens,
      user: userData,
    };
  }

  static async logout(refreshToken: string) {
    // patikrinam, ar tokenas validus
    const userData = TokenService.validateRefreshToken(refreshToken);

    if (!userData) throw ApiError.BadRequest('Neteisinga užklausa');

    const token = await prisma.jwt.deleteMany({
      where: {
        refresh_token: refreshToken,
      },
    });

    return token;
  }

  static async refresh(refreshToken: string) {
    // tikrinam ar nepasibaiges refreshToken galiojimas
    // ir gaunam is token userData
    const userData = TokenService.validateRefreshToken(refreshToken);

    // tikrinam, ar db yra tas refresh token
    const tokenFromDb = await prisma.jwt.findFirst({
      where: {
        refresh_token: refreshToken,
      },
    });

    // ar refresh token geras? ar toks pat refresh token yra db?
    if (!userData || !tokenFromDb) {
      throw ApiError.Unauthorized('Invalid refresh token');
    }

    // isfiltruojam iat ir exp laukus is userData
    const { iat, exp, ...cleanPayload } = userData;

    const tokens = TokenService.generateTokens(cleanPayload as JwtPayload);

    // irasome nauja tokena į db
    await prisma.jwt.update({
      where: {
        user_id: tokenFromDb.user_id,
      },
      data: {
        refresh_token: tokens.refreshToken,
      },
    });

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: cleanPayload,
    };
  }
}
