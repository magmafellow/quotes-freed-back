import z from 'zod';

export const updateUserSchema = z.object({
  firstName: z
    .string()
    .min(1, { error: 'Firstname should not be empty' })
    .optional(),
  lastName: z
    .string()
    .min(1, { error: 'Lastname should not be empty' })
    .optional(),
  email: z.email().optional(),
  username: z
    .string()
    .min(1, { error: 'Username should not be empty' })
    .optional(),
  password: z
    .string()
    .min(1, { error: 'Password should not be empty' })
    .optional(),
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>
