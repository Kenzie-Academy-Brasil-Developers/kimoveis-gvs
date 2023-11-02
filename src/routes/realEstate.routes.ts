import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";

export const realEstateRoutes : Router = Router()
realEstateRoutes.post('/', verifyToken, verifyAdmin, verifyBody, verifyAddressExists)
realEstateRoutes.get('/')
