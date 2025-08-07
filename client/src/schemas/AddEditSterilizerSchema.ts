import * as z from 'zod';

export const AddEditSterilizerSchema = z.object({
  sterilizer_code: z.coerce
    .number({
      message: 'Kodo laukelyje privalo būti skaičius.', // Naudojame "message" naujoje versijoje
    })
    .int('Kodas turi būti sveikas skaičius.')
    .min(1, { message: 'Kodas privalo būti teigiamas skaičius.' }),
  sterilizer_name: z
    .string()
    .trim()
    .min(1, { message: 'Pamiršote įvesti sterilizatoriaus pavadinimą' }),
});
