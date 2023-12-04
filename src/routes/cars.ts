import { Request, Response, Router } from "express";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../controllers/CarController";
import { logMiddleware } from "../middlewares/log";

const router = Router();

//http:localhost:3002/cars
router.get("/", getCars);

router.get("/:id", logMiddleware, getCar);

router.post("/", insertCar);

router.put("/:id", updateCar);

router.delete("/:id", deleteCar);

export { router };
