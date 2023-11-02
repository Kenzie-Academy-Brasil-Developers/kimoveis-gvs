import { z } from "zod";
import { createRealEstateSchema, realEstateSchema } from "../schemas/realEstates.schema";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>
export type RealEstateRepo = Repository<RealEstate>