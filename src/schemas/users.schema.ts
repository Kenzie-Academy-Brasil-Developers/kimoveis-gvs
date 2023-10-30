import { z } from "zod";

export const movieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45).nullish(),
    email: z.string().max(45),
    admin: z.boolean().default(false),
    password: z.string().min(1).max(120),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
})