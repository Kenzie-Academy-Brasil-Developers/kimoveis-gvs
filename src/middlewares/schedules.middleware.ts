import { NextFunction, Request, Response } from "express";
import { Address, RealEstate, Schedule } from "../entities";
import AppError from "../errors/AppError.error";
import { realEstateRepo, schedulesRepo } from "../repositories";

export const verifyRealEstatesExist = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {realEstateId} = req.body
    const realEstateExist : RealEstate | null = await realEstateId.findOne({
        where:{
            id: Number(realEstateId)
        }
    })
    if(!realEstateExist) throw new AppError('Real Estate not found',404)

    return next()
}

export const verifyRealEstatesSchedulesExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { realEstateId, hour, date} = req.body

    const schedule = await schedulesRepo.findOneBy({realEstate: { id: Number(realEstateId)}, hour, date})

    if(schedule) throw new AppError('Schedule to this Real Estate at this date and time already exists', 409 )

    return next()
}

export const verifyUserScheduleExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let {sub} = res.locals.decoded
    
    sub = Number(sub)
    const {hour, date} = req.body
    const schedule : Schedule | null = await schedulesRepo.findOne({
        where: {
            user : {
                id: sub
            },
            date, 
            hour
        }
    }) 
    if(schedule) throw new AppError('User to this Real Estate at this date and time already exists', 409 )
    return next()
}
