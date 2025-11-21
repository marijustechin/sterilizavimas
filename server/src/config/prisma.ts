import config from '../config/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../config/generated/prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const poolConfig = {
  host: config.mainDb.dbHost,
  user: config.mainDb.dbUser,
  password: config.mainDb.dbPass,
  database: config.mainDb.dbName,
  connectionLimit: 5, // Perduodame limitą kaip dalį konfigūracijos
};

const adapter = new PrismaMariaDb(poolConfig);

const prismaDb = globalThis.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismaDb;

export { prismaDb as prisma };
