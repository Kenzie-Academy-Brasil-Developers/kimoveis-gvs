import { Request, Response } from "express";
import { createCategoryService, readCategoryService } from "../services/category.service";

export const createCategoryController = async (req: Request, res: Response) : Promise<Response> => {
    const category = await createCategoryService(req.body)

    return res.status(201).json(category)
}

export const readCategoryController = async (req: Request, res: Response) : Promise<Response> => {
    const categoryRead  = await readCategoryService()

    return res.status(200).json(categoryRead)
}