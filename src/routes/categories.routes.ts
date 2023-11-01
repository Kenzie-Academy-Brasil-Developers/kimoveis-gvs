import { Router } from "express";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middleware";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";

export const categoriesRoutes : Router = Router()
categoriesRoutes.post('/', verifyToken,verifyAdmin,verifyUniqueCategoryName)
categoriesRoutes.get('/')
categoriesRoutes.get('/:id/realEstate',verifyCategoryExists)