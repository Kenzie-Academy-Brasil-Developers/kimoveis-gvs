import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import AppError from "../errors/AppError.error";
import { User } from "../entities";

export const verifyUniqueUserEmail = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {name} = req.body
   const user : User | null = await userRepo.findOneBy({name})
   if(user) throw new AppError('User already exists', 409)

   return next()
}

export const verifyUserExists = async(req: Request, res: Response, next: NextFunction):  Promise<void> => {
    const {id} = req.body
    const user : User | null = await userRepo.findOneBy({id: Number(id)})

    if(!user) throw new AppError('User not found', 404)

    return next()
}

