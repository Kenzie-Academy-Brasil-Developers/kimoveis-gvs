import { z } from "zod";
import { createRealEstateSchema, realEstateSchema } from "../schemas/realEstates.schema";
import { Repository } from "typeorm";

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>
export type RealEstate = Repository<RealEstate>