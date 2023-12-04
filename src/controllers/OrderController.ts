import { Request, Response } from "express";
import { handleHttp } from "../utils/error";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const getOrders = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VE LAS PERSONAS CON SESIÓN JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

export { getOrders };
