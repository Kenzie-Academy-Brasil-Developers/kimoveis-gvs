import { Repository } from "typeorm";
import { Schedule, User } from "./entities";
import { AppDataSource } from "./data-source";

export const userRepo : Repository<User> = AppDataSource.getRepository(User)
export const schedules : Repository<Schedule> = AppDataSource.getRepository(Schedule)