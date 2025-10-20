import $axios from '../config/axios';
import type { TSterilizationCycleItem, TSticker } from '../types';

export default class StickerService {
  static async getAll(query: string): Promise<TSticker[]> {
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
