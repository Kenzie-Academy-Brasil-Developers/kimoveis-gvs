import { Router } from "express";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController } from "../controller/users.controller";

export const usersRoutes : Router = Router()
usersRoutes.post('/', verifyBody, verifyUniqueUserEmail, createUserController)
usersRoutes.get('/', verifyToken, verifyAdmin)
usersRoutes.patch('/:id', verifyBody, verifyToken, verifyUserExists, verifyPermissions)
usersRoutes.delete('/:id', verifyToken, verifyAdmin, verifyPermissions ,verifyUserExists)