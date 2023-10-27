import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.error";

export const handleError = (error : Error, req : Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return res.status(error.status).json({message: error.message})
    }
    //if(error instanceof z.ZodError){
    //    return res.status(400).json(error.flatten().fieldErrors)
    //}
    //
    //if(error instanceof JsonWebTokenError){
    //    return res.status(401).json({message: error.message})
    //}
    return res.status(500).json({message: 'Internal server Error.'})
}