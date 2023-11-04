import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";
import { createRealEstateController } from "../controller/realEstate.controller";

export const realEstateRoutes : Router = Router()
realEstateRoutes.post('/', verifyToken, verifyAdmin, verifyBody, verifyAddressExists, createRealEstateController)
realEstateRoutes.get('/')
