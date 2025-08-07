import $axios from '../config/axios';
import type { TNewSterilizer, TSterilizer } from '../types';

export default class SterilizerService {
  static async getAll(): Promise<TSterilizer[]> {
    const response = await $axios.get('/sterilizer');

    return response.data;
  }

  static async delete(id: number): Promise<TSterilizer> {
    const response = await $axios.delete(`/sterilizer/${id}`);

    return response.data;
  }

  static async update(sterilizer: TSterilizer): Promise<TSterilizer> {
    const response = await $axios.patch('/sterilizer', sterilizer);

    return response.data;
  }

  static async create(sterilizer: TNewSterilizer): Promise<TSterilizer> {
    const response = await $axios.post('/sterilizer', sterilizer);

    return response.data;
  }
}
