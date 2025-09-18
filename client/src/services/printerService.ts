import $axios from '../config/axios';
import type { TPrinter } from '../types';

export default class PrinterService {
  /**
   *
   * @returns
   */
  static async getAll(): Promise<TPrinter[]> {
    const response = await $axios.get('/printer');

    return response.data;
  }

  /**
   *
   * @param name
   * @param port
   * @param ip_address
   * @returns TPrinter
   */
  static async create(
    name: string,
    port: number,
    ip_address: string
  ): Promise<TPrinter> {
    const response = await $axios.post('/printer', { name, port, ip_address });

    return response.data;
  }

  /**
   *
   * @param id
   * @param name
   * @param port
   * @param ip_address
   * @returns updated printer object
   */
  static async edit(
    id: number,
    name: string,
    port: number,
    ip_address: string
  ): Promise<TPrinter> {
    const response = await $axios.patch('/printer', {
      id,
      port,
      ip_address,
      name,
    });

    return response.data;
  }

  /**
   *
   * @param id printer to delete
   * @returns deleted printer object
   */
  static async delete(id: number): Promise<TPrinter> {
    const response = await $axios.delete(`/printer/${id}`);

    return response.data;
  }

  /**
   *
   * @param id spausdintuvo id
   * @returns updated printer
   */
  static async toggleIsActivePrinter(id: number): Promise<TPrinter> {
    const response = await $axios.post(`/printer/toggle/${id}`);

    return response.data;
  }
}
