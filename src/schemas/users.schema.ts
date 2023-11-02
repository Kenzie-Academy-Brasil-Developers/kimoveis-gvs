import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45).nullish(),
    email: z.string().max(45).email(),
    admin: z.boolean().default(false),
    password: z.string().min(1).max(120),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
})
export const createUserSchema = userSchema.pick({
    name: true,
    email: true,
    admin: true,
    password: true
})
