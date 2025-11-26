import { NextFunction, Request, Response } from 'express';
import UserService from '../services/userService.js';
import ApiError from '../errors/apiErrors.js';

export default class UserController {
  static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, password } = req.body;

      const authUser = await UserService.login(username, password);

      res.cookie('refreshToken', authUser.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000, // 1 diena
        httpOnly: true,
      });

      res
        .status(200)
        .json({ accessToken: authUser.accessToken, user: authUser.user });
    } catch (error) {
      next(error);
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      // Visada išvalome slapuką kliento pusėje, jei jis egzistavo
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Nustatyti į true gamyboje
        // other cookie options if any
      });

      await UserService.logout(refreshToken);

      res.status(200).json('Sėkmingai atsijungėte');
    } catch (error) {
      next(error);
    }
  }

  static async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      if (!refreshToken) {
        res.clearCookie('refreshToken'); // sena tikrai ismetam
        throw ApiError.Unauthorized('No refresh token');
      }

      const userData = await UserService.refresh(refreshToken);

      if (!userData) {
        res.clearCookie('refreshToken'); // Ismetam netinkama tokena
        throw ApiError.Unauthorized('Dar nesugalvojau...');
      }

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 24 * 60 * 60 * 1000, // 1 diena
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Produksine apsaugom
      });

      res
        .status(200)
        .json({ accessToken: userData.accessToken, user: userData.user });
    } catch (error) {
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      });
      next(error);
    }
  }
}
