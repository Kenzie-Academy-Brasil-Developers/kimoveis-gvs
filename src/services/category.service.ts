import { Category } from "../entities";
import { CreateCategory, ReadAllCategory } from "../interfaces/categories.interface";
import { categorieRepo } from "../repositories";

export const createCategoryService = async(data : CreateCategory):Promise<Category> => {
    return await categorieRepo.save(data)
}

export const readCategoryService = async(): Promise<ReadAllCategory> => {
    return await categorieRepo.find()
}
