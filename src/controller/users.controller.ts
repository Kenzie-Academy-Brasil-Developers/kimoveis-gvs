import { Request, Response } from "express";
import { createUserService, readAllUsersService } from "../services/users.service";

export const createUserController = async(req: Request, res: Response): Promise<Response> => {
    const user = await createUserService(req.body)
    return res.status(200).json(user)
}
export const readAllUsersController = async(req: Request, res: Response): Promise<Response> => {
    const users = await readAllUsersService()
    return res.status(200).json(users)
}