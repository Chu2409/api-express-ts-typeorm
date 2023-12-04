import { Request, Response, Router } from "express";
import { register } from "../controllers/UserController";

const router = Router();

//http:localhost:3002/users/register
router.post("/register", register);

export { router };
