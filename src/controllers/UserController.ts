import { Request, Response } from "express";
import * as UserService from "../services/UserService";
import { handleHttp } from "../utils/error";

const register = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await UserService.register(body);
    res.send(responseUser);
  } catch (e) {
    handleHttp(res, "ERROR_PUT_USER", e);
  }
};

export { register };
