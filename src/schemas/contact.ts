import { z } from 'zod';
export const contactSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	text: z.string().min(10),
	email: z.string().email().min(3)
});

export type IContactSchema = typeof contactSchema;
