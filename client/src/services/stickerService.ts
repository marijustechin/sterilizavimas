import $axios from '../config/axios';
import type { TGetStickersResponse, TSterilizationCycleItem } from '../types';

export default class StickerService {
  static async getAll(query: string): Promise<TGetStickersResponse> {
    const response = await $axios.get(`/sticker${query}`);

    return response.data;
  }

  static async toggleStickerSuccess(
    short_code: string
  ): Promise<TSterilizationCycleItem> {
    const response = await $axios.post('/sticker/togglesuccess', {
      short_code,
    });

    return response.data;
  }
}
