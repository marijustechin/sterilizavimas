import $axios from '../config/axios';
import type { TSterilizer } from '../types';

export default class SterilizerService {
  static async getAll(): Promise<TSterilizer[]> {
    const response = await $axios.get('/sterilizer');

    return response.data;
  }
}
