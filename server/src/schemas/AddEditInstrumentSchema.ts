import * as z from 'zod';

export const AddEditInstrumentSchema = z.object({
  instrument_code: z.coerce
    .number({
      message: 'Kodo laukelyje privalo būti skaičius.', // Naudojame "message" naujoje versijoje
    })
    .int('Kodas turi būti sveikas skaičius.')
    .min(1, { message: 'Kodas privalo būti teigiamas skaičius.' }),
  instrument_name: z
    .string()
    .trim()
    .min(1, { message: 'Pamiršote įvesti instrumento pavadinimą' }),
  instrument_exp: z.coerce
    .number({
      message: 'Galiojimo laukelyje privalo būti skaičius.', // Naudojame "message"
    })
    .int('Galiojimas turi būti sveikas skaičius.')
    .min(1, { message: 'Galiojimas privalo būti teigiamas skaičius.' }),
});
