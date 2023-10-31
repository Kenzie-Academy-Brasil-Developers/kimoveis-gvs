import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "./entities";
import { AppDataSource } from "./data-source";

export const userRepo : Repository<User> = AppDataSource.getRepository(User)
export const schedulesRepo : Repository<Schedule> = AppDataSource.getRepository(Schedule)
export const realEstateRepo : Repository<RealEstate> = AppDataSource.getRepository(RealEstate)