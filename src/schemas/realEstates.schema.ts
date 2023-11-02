import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),   
    

})