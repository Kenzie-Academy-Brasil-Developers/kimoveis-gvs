import { Router } from "express";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController, readAllUsersController, softDeleteUserController, updateUserController } from "../controller/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

export const usersRoutes : Router = Router()
usersRoutes.post('/', verifyBody(createUserSchema), verifyUniqueUserEmail, createUserController)
usersRoutes.get('/', verifyToken, verifyAdmin, readAllUsersController)
usersRoutes.patch('/:id', verifyBody(updateUserSchema), verifyToken, verifyUserExists, verifyPermissions, updateUserController)
usersRoutes.delete('/:id', verifyToken, verifyUserExists, verifyPermissions , softDeleteUserController)