import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),  
    value: z.number().default(0),
    size: z.number(),
    createdAt: z.string(),
    updatedAt : z.string(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.string(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().positive().int()
})
export const createRealEstateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
})

