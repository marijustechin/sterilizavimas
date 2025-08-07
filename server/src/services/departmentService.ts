import { TDepartment, TNewDepartment } from 'types';
import { prisma } from '../config/prisma';
import ApiError from '../errors/apiErrors';

export default class DepartmentService {
  static async getAll() {
    return await prisma.department.findMany({
      orderBy: {
        department_code: 'asc',
      },
    });
  }

  static async create(newDepartment: TNewDepartment): Promise<TDepartment> {
    // Tikriname, ar instrument_code egzistuoja duomenų bazėje
    const existingDepartment = await prisma.department.findUnique({
      where: {
        department_code: newDepartment.department_code,
      },
    });

    if (existingDepartment) {
      throw ApiError.Conflict(
        `Instrumentas su kodu: ${newDepartment.department_code} jau egzistuoja`
      );
    }

    return await prisma.department.create({
      data: {
        department_code: newDepartment.department_code,
        department_name: newDepartment.department_name,
      },
    });
  }

  static async delete(id: number): Promise<TDepartment> {
    // patikriname ar instrumentas su tokiu id yra
    const existingDepartment = await prisma.department.findUnique({
      where: {
        department_code: id,
      },
    });

    if (!existingDepartment)
      throw ApiError.NotFound(`Skyrius, kurio kodas ${id} nerastas.`);

    return await prisma.department.delete({
      where: {
        department_code: id,
      },
    });
  }

  static async patch(department: TDepartment): Promise<TDepartment> {
    // Tikriname, ar instrumentas yraa duomenų bazėje
    const existingDepartment = await prisma.department.findUnique({
      where: {
        id: department.id,
      },
    });

    if (!existingDepartment) {
      throw ApiError.NotFound(
        `Skyrius ${department.department_code}. ${department.department_name} nerastas.`
      );
    }

    // Tikriname, ar atnaujinamo instrumento kodas pakeistas
    // jei pakeistas, tikriname, ar jis unikalus
    if (existingDepartment.department_code !== department.department_code) {
      const codeInDatabase = await prisma.department.findUnique({
        where: {
          department_code: department.department_code,
        },
      });

      if (codeInDatabase)
        throw ApiError.Conflict(`${department.department_code} kodas užimtas`);
    }

    return await prisma.department.update({
      where: {
        id: department.id,
      },
      data: {
        department_code: department.department_code,
        department_name: department.department_name,
      },
    });
  }
}
