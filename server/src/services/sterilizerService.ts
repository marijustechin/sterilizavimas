import dbAutoclave from '../config/db';
import DbSterilizers from './dbSterilizers';

const dbSterilizers = new DbSterilizers(dbAutoclave);

export default class SterilizerService {
  static async getAll() {
    return await dbSterilizers.getAllSterilizers();
  }
}
