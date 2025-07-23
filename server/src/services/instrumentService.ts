import { prisma } from '../config/prisma';

export default class InstrumentService {
  static async getAll() {
    return await prisma.instrument.findMany();
  }
}
