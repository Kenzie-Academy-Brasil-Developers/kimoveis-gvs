import { Category } from "../entities";
import { CreateCategory } from "../interfaces/categories.interface";
import { categorieRepo } from "../repositories";

export const createCategoryService = async(data : CreateCategory):Promise<Category> => {
    return await categorieRepo.save(data)
}