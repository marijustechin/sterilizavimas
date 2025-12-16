import $axios from '../config/axios';
import type { TAdminReportResponse, TCycleDataResponse } from '../types';

export default class AdminService {
  static async getCycleRecords(query: string): Promise<TCycleDataResponse> {
    const response = await $axios.get(`/admin/usage${query}`);

    return response.data;
  }

  static async getAdminReport(query: string): Promise<TAdminReportResponse> {
    const response = await $axios.get(`/admin/reports${query}`);

    return response.data;
  }
}
