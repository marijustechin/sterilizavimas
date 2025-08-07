import * as z from 'zod';

export const AddEditDepartmentSchema = z.object({
  department_code: z.coerce
    .number({
      message: 'Kodo laukelyje privalo būti skaičius.', // Naudojame "message" naujoje versijoje
    })
    .int('Kodas turi būti sveikas skaičius.')
    .min(1, { message: 'Kodas privalo būti teigiamas skaičius.' }),
  department_name: z
    .string()
    .trim()
    .min(1, { message: 'Pamiršote įvesti skyriaus pavadinimą' }),
});
