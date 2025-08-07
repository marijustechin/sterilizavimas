import $axios from '../config/axios';
import type { TDepartment, TNewDepartment } from '../types';

export default class DepartmentService {
  static async getAll(): Promise<TDepartment[]> {
    const response = await $axios.get('/department');

    return response.data;
  }

  /**
   * create
   * @param department
   * @returns created department
   */
  static async create(department: TNewDepartment): Promise<TDepartment> {
    const response = await $axios.post('/department', department);

    return response.data;
  }

  /**
   * delete
   * @param id number
   * @returns deleted department
   */
  static async delete(id: number): Promise<TDepartment> {
    const response = await $axios.delete(`/department/${id}`);

    return response.data;
  }

  /**
   *
   * @param department to delete
   * @returns deleted department
   */
  static async update(department: TDepartment): Promise<TDepartment> {
    const response = await $axios.patch('/department', department);

    return response.data;
  }
}
