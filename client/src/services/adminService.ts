import $axios from '../config/axios';
import type { TCycleDataResponse } from '../types';

export default class AdminService {
  static async getCycleRecords(query: string): Promise<TCycleDataResponse> {
    const response = await $axios.get(`/admin/sterilization${query}`);

    return response.data;
  }
}
