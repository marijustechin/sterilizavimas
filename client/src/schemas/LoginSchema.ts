import * as z from 'zod';

export const LoginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, { message: 'Naudotojo vardas privalomas' }),
  password: z.string().trim().min(1, { message: 'Slaptažodis privalomas' }),
});
