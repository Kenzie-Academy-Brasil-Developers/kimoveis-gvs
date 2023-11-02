import { z } from "zod";

const categorieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45)
})