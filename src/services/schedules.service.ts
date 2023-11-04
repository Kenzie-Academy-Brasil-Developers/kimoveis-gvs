import { RealEstate, Schedule, User } from "../entities";
import AppError from "../errors/AppError.error";
import { CreateSchedule } from "../interfaces/schedules.interface";
import { realEstateRepo, schedulesRepo, userRepo } from "../repositories";

export const createScheduleService = async(data: CreateSchedule, userId: number): Promise<void> => {
    const newDate = new Date(data.date).getDate()
    if((newDate === 0) || (newDate === 6)) throw new AppError('Invalide date, work days are monday to friday',400)
    const time = Number(data.hour.split(':')[0])
    if((time < 8) || (time > 18)) throw new AppError('Invalide hour, available times are 8AM to 18PM', 400)
    const realEstate : RealEstate | null = await realEstateRepo.findOneBy({id: data.realEstateId})
    const user : User | null = await userRepo.findOneBy({id: userId})

    await schedulesRepo.save({...data, realEstate: realEstate!, user: user!})
}