import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { StringValue } from 'ms';
import ApiError from '../errors/apiErrors';

export default class TokenService {
  private static readonly accessSecret = process.env.JWT_ACCESS_SECRET;
  private static readonly refreshSecret = process.env.JWT_REFRESH_SECRET;
  private static readonly accessExpires = (process.env.JWT_ACCESS_EXPIRES ??
    '1h') as StringValue;
  private static readonly refreshExpires = (process.env.JWT_REFRESH_EXPIRES ??
    '1d') as StringValue;

  static generateTokens(payload: JwtPayload) {
    if (this.accessSecret && this.refreshSecret) {
      const accessToken = jwt.sign(payload, this.accessSecret, {
        expiresIn: this.accessExpires,
      });
      const refreshToken = jwt.sign(payload, this.refreshSecret, {
        expiresIn: this.refreshExpires,
      });

      return { accessToken, refreshToken };
    } else {
      throw ApiError.BadRequest('JWT secrets undefined');
    }
  }

  static validateAccessToken(accessToken: string) {
    try {
      if (!this.accessSecret) throw ApiError.BadRequest('JWT secret undefined');

      const userData = jwt.verify(accessToken, this.accessSecret as Secret);

      return userData;
    } catch (e) {
      console.log(e);
      throw ApiError.Unauthorized('Invalid token');
    }
  }

  static validateRefreshToken(refreshToken: string) {
    try {
      if (!this.refreshSecret)
        throw ApiError.BadRequest('JWT secret undefined');

      const userData = jwt.verify(refreshToken, this.refreshSecret as Secret);

      return userData as JwtPayload;
    } catch (e) {
      console.log('validateRefreshToken: ', e);
      return null;
    }
  }
}
