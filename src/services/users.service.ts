import { User } from "../entities";
import { UserCreate, UserRead, UserReturn } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/users.schema";

export const createUserService = async(data: UserCreate ): Promise<UserReturn> => {
    const user : User = userRepo.create(data)
    await userRepo.save(user)
    return userReturnSchema.parse(user) 
}

export const readAllUsersService = async (): Promise<UserRead> => {
    const users: User[] = await userRepo.find()
  
    return userReadSchema.parse(users)
  }