import $axios from '../config/axios';
import type { TCycleRecord } from '../types';

export default class AdminService {
  static async getCycleRecords(query: string): Promise<TCycleRecord> {
    const response = await $axios.get(`/users${query}`);

    return response.data;
  }
}
