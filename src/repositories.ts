import { Repository } from "typeorm";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { AppDataSource } from "./data-source";
import { RealEstateRepo } from "./interfaces/realEstates.interface";

export const userRepo : Repository<User> = AppDataSource.getRepository(User)
export const schedulesRepo : Repository<Schedule> = AppDataSource.getRepository(Schedule)
export const realEstateRepo : RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const categorieRepo : Repository<Category> = AppDataSource.getRepository(Category)
export const addressRepo : Repository<Address> = AppDataSource.getRepository(Address)