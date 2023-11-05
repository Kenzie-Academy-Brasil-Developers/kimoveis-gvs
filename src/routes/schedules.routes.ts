import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstatesExist, verifyRealEstatesSchedulesExist, verifyUserScheduleExists } from "../middlewares/schedules.middleware";
import { createScheduleController, readAllScheduleRealEstateController } from "../controller/schedules.controller";
import { createScheduleSchema } from "../schemas/schedules.schema";

export const schedulesRoutes : Router = Router()
schedulesRoutes.post('/', verifyToken ,verifyBody(createScheduleSchema), verifyRealEstatesExist, verifyRealEstatesSchedulesExist, verifyUserScheduleExists, createScheduleController)
schedulesRoutes.get('/realEstate/:id', verifyToken, verifyAdmin, readAllScheduleRealEstateController)