import { Router } from "express";
import { getOrders } from "../controllers/OrderController";
import { checkSession } from "../middlewares/session";

const router = Router();

router.get("/", checkSession, getOrders);

export { router };
