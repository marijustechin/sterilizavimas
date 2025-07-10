import DbSterilization from '../models/dbSterilization';
import dbAutoclave from '../config/db';

const dbSterilization = new DbSterilization(dbAutoclave);

export default class SterilizationService {
  static async getCycleNumber(sterilizerId: number): Promise<number> {
    return await dbSterilization.getNextCycleNumber(sterilizerId);
  }
}
