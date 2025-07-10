import $axios from '../config/axios';
import type { TLoginAxiosResponse } from '../types/user';

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<TLoginAxiosResponse> {
    const response = await $axios.post('/user/login', {
      username: username,
      password: password,
    });

    return response.data;
  }

  static async logout(): Promise<string> {
    const response = await $axios.post('/user/logout');

    return response.data;
  }

  static async refresh(): Promise<TLoginAxiosResponse> {
    const response = await $axios.post('/user/refresh');

    return response.data;
  }
}
