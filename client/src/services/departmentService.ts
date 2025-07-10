import $axios from '../config/axios';
import type { TDepartment } from '../types';

export default class DepartmentService {
  static async getAll(): Promise<TDepartment[]> {
    const response = await $axios.get('/department');

    return response.data;
  }
}
