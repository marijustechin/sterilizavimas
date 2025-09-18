import $axios from '../config/axios';
import type { TScannedSticker } from '../types';

export default class MedicService {
  static async getStickerDetails(
    stickerString: string
  ): Promise<TScannedSticker> {
    const response = await $axios.post(
      '/medic/stickerdetails',
      {
        stickerString,
      },
      { baseURL: '/api/v1' }
    ); // per Vite proxy -> reikės vėliau ištrinti

    return response.data;
  }

  static async saveUsedInstruments(): Promise<string> {
    await $axios.post('/medic/saveusedinstruments');

    return 'save used instruments - 0k';
  }
}
