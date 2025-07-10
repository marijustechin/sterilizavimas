import $axios from '../config/axios';

export default class SterilizationService {
  static async getCycleNumber(id: number): Promise<number> {
    const response = await $axios.get(`/sterilization/cycle-number/${id}`);

    return response.data;
  }
}
