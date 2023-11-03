import { Router } from "express";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middleware";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { createCategoryController, readCategoryController, readRealEstatesByCategoryController } from "../controller/category.controller";

export const categoriesRoutes : Router = Router()
categoriesRoutes.post('/', verifyToken,verifyAdmin,verifyBody,verifyUniqueCategoryName, createCategoryController)
categoriesRoutes.get('/', readCategoryController)
categoriesRoutes.get('/:id/realEstate',verifyCategoryExists, readRealEstatesByCategoryController)