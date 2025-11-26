import { Prisma } from '../config/generated/prisma/client.js';
import { prisma } from '../config/prisma.js';
import ApiError from '../errors/apiErrors.js';
import { TPrinter } from '../types/printer.js';

export default class PrinterService {
  static async getAll() {
    return await prisma.printer.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  static async create(
    name: string,
    ip_address: string,
    port: number
  ): Promise<TPrinter | null> {
    // Tikriname, ar printer su toku ip/port yra duomenų bazėje
    const existingPrinter = await prisma.printer.findFirst({
      where: {
        ip_address: ip_address,
        port: port,
      },
    });

    if (existingPrinter)
      throw ApiError.Conflict(
        `Spausdintuvas su adresu: ${ip_address} ir prievadu: ${port} jau yra duomenų bazėje`
      );

    return await prisma.printer.create({
      data: {
        name: name,
        ip_address: ip_address,
        port: port,
      },
    });
  }

  static async delete(id: number): Promise<TPrinter> {
    //patikriname ar spausdintuvas su tokiu id yra
    const existingPrinter = await prisma.printer.findUnique({
      where: {
        id,
      },
    });

    if (!existingPrinter)
      throw ApiError.NotFound(`Spausdintuvo ID:${id} nepavyko rasti`);

    return await prisma.printer.delete({
      where: { id: id },
    });
  }

  static async patch(
    id: number,
    name: string,
    port: number,
    ip_address: string
  ): Promise<TPrinter> {
    try {
      return await prisma.printer.update({
        where: { id },
        data: {
          ...(name !== undefined && { name }),
          ...(port !== undefined && { port }),
          ...(ip_address !== undefined && { ip_address }),
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw ApiError.NotFound(`Spausdintuvo ID:${id} nepavyko rasti`);
        }
        if (e.code === 'P2002') {
          throw ApiError.Conflict(
            `Spausdintuvas ${ip_address ?? 'IP?'}:${
              port ?? 'port?'
            } jau egzistuoja`
          );
        }
      }
      throw e;
    }
  }

  static async toggleIsActivePrinter(id: number): Promise<TPrinter> {
    const printer = await prisma.printer.findUnique({
      where: {
        id,
      },
    });

    if (!printer) throw ApiError.BadRequest(`Spausdintuvas ID:${id} nerastas`);

    const updatedPrinter = await prisma.printer.update({
      where: { id },
      data: {
        active: !printer.active,
      },
    });

    return updatedPrinter;
  }
}
