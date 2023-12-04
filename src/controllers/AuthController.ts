import { Request, Response, response } from "express";
import * as AuthService from "../services/AuthService";

const login = async ({ body }: Request, res: Response) => {
  const responseAuth = await AuthService.login(body);
  res.send(responseAuth);
};

export { login };
