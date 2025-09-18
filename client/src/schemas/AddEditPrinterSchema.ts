import * as z from 'zod';

// IPv4 regex: 0–255 keturi blokai
const ipv4Regex =
  /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

export const AddEditPrinterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Prašome nurodyti spausdintuvo pavadinimą' })
    .max(100, 'Iki 100 simbolių'),
  ip_address: z
    .string()
    .trim()
    .regex(ipv4Regex, {
      message: 'Neteisingas IPv4 adresas (pvz., 10.0.123.50)',
    })
    .transform((s) => s.replace(/\s+/g, '')),
  port: z.coerce
    .number({ message: 'Prievado laukelyje privalo būti skaičius.' })
    .int({ message: 'Prievadas turi būti sveikas skaičius.' })
    .min(1, { message: 'Prievadas privalo būti teigiamas skaičius.' })
    .max(65535, { message: 'Prievadas negali būti didesnis nei 65535' }),
});
