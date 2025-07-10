import dbAutoclave from '../config/db';
import DbInstrumentai from './dbInstruments';

const dbInstrumentai = new DbInstrumentai(dbAutoclave);

export default class InstrumentService {
  static async getAll() {
    return await dbInstrumentai.getAllInstruments();
  }
}
