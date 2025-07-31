import $axios from '../config/axios';
import type { TInstrument, TNewInstrument } from '../types';

export default class InstrumentService {
  static async getAll(): Promise<TInstrument[]> {
    const response = await $axios.get('/instrument');

    return response.data;
  }

  static async delete(id: number): Promise<TInstrument> {
    const response = await $axios.delete(`/instrument/${id}`);

    return response.data;
  }

  static async update(instrument: TInstrument): Promise<TInstrument> {
    const response = await $axios.patch('/instrument', instrument);

    return response.data;
  }

  static async create(instrument: TNewInstrument): Promise<TInstrument> {
    const response = await $axios.post('/instrument', instrument);

    return response.data;
  }
}
