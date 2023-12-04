import { Request, Response, Router } from "express";
import { login } from "../controllers/AuthController";

const router = Router();

//http:localhost:3002/auths/login
router.post("/login", login);

export { router };
