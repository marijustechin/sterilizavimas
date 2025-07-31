import { TInstrument, TNewInstrument } from 'types';
import { prisma } from '../config/prisma';
import ApiError from '../errors/apiErrors';

export default class InstrumentService {
  static async getAll() {
    return await prisma.instrument.findMany();
  }

  static async delete(id: number): Promise<TInstrument> {
    // patikriname ar instrumentas su tokiu id yra
    const existingInstrument = await prisma.instrument.findUnique({
      where: {
        instrument_code: id,
      },
    });

    if (!existingInstrument)
      throw ApiError.NotFound(`Instrumentas, kurio kodas ${id} nerastas.`);

    return await prisma.instrument.delete({
      where: {
        instrument_code: id,
      },
    });
  }

  static async create(newInstrument: TNewInstrument): Promise<TInstrument> {
    // Tikriname, ar instrument_code egzistuoja duomenų bazėje
    const existingInstrument = await prisma.instrument.findUnique({
      where: {
        instrument_code: newInstrument.instrument_code,
      },
    });

    if (existingInstrument) {
      throw ApiError.Conflict(
        `Instrumentas su kodu: ${newInstrument.instrument_code} jau egzistuoja`
      );
    }

    return await prisma.instrument.create({
      data: {
        instrument_code: newInstrument.instrument_code,
        instrument_name: newInstrument.instrument_name,
        instrument_exp: newInstrument.instrument_exp,
      },
    });
  }

  static async patch(instrument: TInstrument): Promise<TInstrument> {
    // Tikriname, ar instrumentas yraa duomenų bazėje
    const existingInstrument = await prisma.instrument.findUnique({
      where: {
        id: instrument.id,
      },
    });

    if (!existingInstrument) {
      throw ApiError.NotFound(
        `Instrumentas ${instrument.instrument_code}. ${instrument.instrument_name} nerastas.`
      );
    }

    // Tikriname, ar atnaujinamo instrumento kodas pakeistas
    // jei pakeistas, tikriname, ar jis unikalus
    if (existingInstrument.instrument_code !== instrument.instrument_code) {
      const codeInDatabase = await prisma.instrument.findUnique({
        where: {
          instrument_code: instrument.instrument_code,
        },
      });

      if (codeInDatabase)
        throw ApiError.Conflict(`${instrument.instrument_code} kodas užimtas`);
    }

    return await prisma.instrument.update({
      where: {
        id: instrument.id,
      },
      data: {
        instrument_code: instrument.instrument_code,
        instrument_name: instrument.instrument_name,
        instrument_exp: instrument.instrument_exp,
      },
    });
  }
}
