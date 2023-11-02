import { z } from "zod";

export const sheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive(),
    userId: z.number().positive()
})