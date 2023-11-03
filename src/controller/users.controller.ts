import { Request, Response } from "express";
import { createUserService } from "../services/users.service";

export const createUserController = async(req: Request, res: Response): Promise<Response> => {
    const user = await createUserService(req.body)
    return res.status(200).json(user)
}