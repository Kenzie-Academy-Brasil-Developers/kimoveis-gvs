import { Repository } from "typeorm";
import { Category } from "../entities";
import { z } from "zod";
import { createCategorySchema } from "../schemas/categories.schema";

export type CategoryRepo = Repository<Category>
export type CreateCategory = z.infer<typeof createCategorySchema>