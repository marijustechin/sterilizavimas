export default class SterilizationService {
  static async getCycleNumber(sterilizerId: number): Promise<number> {
    //return await dbSterilization.getNextCycleNumber(sterilizerId);
    return 1;
  }
}
