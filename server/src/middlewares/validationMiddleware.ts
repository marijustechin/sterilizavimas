import { Request, Response, NextFunction } from 'express';
import { z } from 'zod'; // ZodError nebereikia importuoti
import { StatusCodes } from 'http-status-codes';

export function validateData(
  schema: z.ZodObject<any, any>,
  source: 'body' | 'params' | 'query' = 'body'
) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Naudojame safeParse, kad išvengtume try...catch bloko
    const result = schema.safeParse(req[source]);

    // Tikriname, ar validacija pavyko
    if (!result.success) {
      const errorMessages = result.error.issues.map((issue: any) => ({
        message: `${issue.path.join('.')} -> ${issue.message}`,
      }));

      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: 'Invalid data', details: errorMessages });
    }

    // Jei validacija pavyko, perduodame valdymą kitam middleware
    // Arba galime priskirti patvirtintus duomenis prie request objekto
    // (nors tai nėra būtina, nes req[source] yra jau validus)
    // req[source] = result.data; // Galima priskirti patvirtintus duomenis
    next();
  };
}
