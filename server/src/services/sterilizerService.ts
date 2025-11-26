import { prisma } from '../config/prisma.js';
import ApiError from '../errors/apiErrors.js';
import { TNewSterilizer, TSterilizer } from '../types/sterilization.js';

export default class SterilizerService {
  static async getAll() {
    return await prisma.sterilizer.findMany({
      orderBy: {
        sterilizer_code: 'asc',
      },
    });
  }

  static async create(newSterilizer: TNewSterilizer): Promise<TSterilizer> {
    // Tikriname, ar sterilizer_code egzistuoja duomenų bazėje
    const existingSterlizier = await prisma.sterilizer.findUnique({
      where: {
        sterilizer_code: newSterilizer.sterilizer_code,
      },
    });

    if (existingSterlizier) {
      throw ApiError.Conflict(
        `Sterilizatorius su kodu: ${newSterilizer.sterilizer_code} jau egzistuoja`
      );
    }

    return await prisma.sterilizer.create({
      data: {
        sterilizer_code: newSterilizer.sterilizer_code,
        sterilizer_name: newSterilizer.sterilizer_name,
      },
    });
  }

  static async delete(id: number): Promise<TSterilizer> {
    // patikriname ar instrumentas su tokiu id yra
    const existingSterlizier = await prisma.sterilizer.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingSterlizier)
      throw ApiError.NotFound(`Sterilizatorius, kurio kodas ${id} nerastas.`);

    return await prisma.sterilizer.delete({
      where: {
        id: id,
      },
    });
  }

  static async patch(sterilizer: TSterilizer): Promise<TSterilizer> {
    // Tikriname, ar sterilizarius yra duomenų bazėje
    const existingSterlizier = await prisma.sterilizer.findUnique({
      where: {
        id: sterilizer.id,
      },
    });

    if (!existingSterlizier) {
      throw ApiError.NotFound(
        `Sterilizatorius ${sterilizer.sterilizer_code}. ${sterilizer.sterilizer_name} nerastas.`
      );
    }

    // Tikriname, ar atnaujinamo instrumento kodas pakeistas
    // jei pakeistas, tikriname, ar jis unikalus
    if (existingSterlizier.sterilizer_code !== sterilizer.sterilizer_code) {
      const codeInDatabase = await prisma.sterilizer.findUnique({
        where: {
          sterilizer_code: sterilizer.sterilizer_code,
        },
      });

      if (codeInDatabase)
        throw ApiError.Conflict(`${sterilizer.sterilizer_code} kodas užimtas`);
    }

    return await prisma.sterilizer.update({
      where: {
        id: sterilizer.id,
      },
      data: {
        sterilizer_code: sterilizer.sterilizer_code,
        sterilizer_name: sterilizer.sterilizer_name,
      },
    });
  }
}
