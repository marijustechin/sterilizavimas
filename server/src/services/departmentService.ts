import { prisma } from '../config/prisma';

export default class DepartmentService {
  static async getAll() {
    return await prisma.department.findMany();
  }
}
