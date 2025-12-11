import $axios from '../config/axios';
import type { TGetStickersResponse, TSterilizationCycleItem } from '../types';

export default class StickerService {
  static async getAll(query: string): Promise<TGetStickersResponse> {
    const response = await $axios.get(`/sticker${query}`);

    return response.data;
  }

  static async toggleStickerSuccess(
    short_code: string,
    user_id: string
  ): Promise<TSterilizationCycleItem> {
    console.log(user_id, '- user id');
    const response = await $axios.post('/sticker/togglesuccess', {
      short_code,
      user_id,
    });

    return response.data;
  }
}
