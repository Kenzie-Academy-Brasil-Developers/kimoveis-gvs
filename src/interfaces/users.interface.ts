import { Repository } from "typeorm";
import { User } from "../entities";
import { z } from "zod";
import { createUserSchema, updateUserSchema, userWithoutAdmin } from "../schemas/users.schema";

export type UserRepo = Repository<User>
export type CreateUser = z.infer<typeof createUserSchema>
export type userWithoutAdmin = z.infer<typeof userWithoutAdmin>
export type UpdateUser = Partial<z.infer<typeof updateUserSchema>>