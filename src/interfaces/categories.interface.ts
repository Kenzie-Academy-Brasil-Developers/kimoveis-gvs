import { Repository } from "typeorm";
import { Category } from "../entities";

export type CategoryRepo = Repository<Category>
