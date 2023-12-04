import { Request, Response } from "express";
import * as StorageService from "../services/StorageService";
import { handleHttp } from "../utils/error";
import { RequestExt } from "../interfaces/req-ext";
import { StorageInterface } from "../interfaces/StorageInterface";

const PATH_STORAGE = `${process.cwd()}/storage`;

const register = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    ///console.log(file);

    const fileName = file?.filename as string;

    const dataToRegister: StorageInterface = {
      fileName,
      userId: user?.id,
      path: PATH_STORAGE + "/" + fileName,
    };

    const response = await StorageService.register(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_PUT_USER", e);
  }
};

export { register };
