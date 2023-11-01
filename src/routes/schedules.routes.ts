import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstatesExist, verifyRealEstatesSchedulesExist, verifyUserScheduleExists } from "../middlewares/schedules.middleware";

export const schedulesRoutes : Router = Router()
schedulesRoutes.post('/', verifyToken ,verifyBody, verifyRealEstatesExist, verifyRealEstatesSchedulesExist, verifyUserScheduleExists)
schedulesRoutes.get('/realEstate/:id', verifyToken, verifyAdmin)