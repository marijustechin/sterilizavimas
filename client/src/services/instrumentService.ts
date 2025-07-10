import $axios from '../config/axios';
import type { TInstrument } from '../types/instrument';

export default class InstrumentService {
  static async getAll(): Promise<TInstrument[]> {
    const response = await $axios.get('/instrument');

    return response.data;
  }
}
