import $axios from '../config/axios';
import type { TSterilizationCyclePayload } from '../types';

export default class SterilizationService {
  static async getCycleNumber(id: number): Promise<number> {
    const response = await $axios.get(`/sterilization/cycle-number/${id}`);

    return response.data;
  }

  static async saveSterilizationCycle(
    sterilizationCycleData: TSterilizationCyclePayload
  ): Promise<string> {
    const response = await $axios.post(
      '/sterilization/sterilization-cyclein',
      sterilizationCycleData
    );

    // gal man grąžinti tik kodą 201 ???
    console.log(response.data);
    return response.data;
  }
}
