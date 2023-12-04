import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || null;
    const jwt = jwtByUser?.split(" ").pop();
    const isUser = verifyToken(jwt as string);
    //console.log(isUser);

    if (!isUser) {
      res.status(401);
      res.send("INVALID_JWT");
    } else {
      //console.log({ jwtByUser });
      req.user = isUser as { id: number };
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("NO_VALID_SESSION");
  }
};

export { checkSession };
