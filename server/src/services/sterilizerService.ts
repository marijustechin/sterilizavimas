import { prisma } from '../config/prisma';

export default class SterilizerService {
  static async getAll() {
    return await prisma.sterilizer.findMany();
  }
}
