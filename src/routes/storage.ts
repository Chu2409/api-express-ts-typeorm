import { Router } from "express";
import multerMiddleware from "../middlewares/file";
import { register } from "../controllers/StorageController";
import { checkSession } from "../middlewares/session";

const router = Router();

router.post(
  "/upload",
  checkSession,
  multerMiddleware.single("myfile"),
  register
);

export { router };
