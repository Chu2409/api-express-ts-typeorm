import { Request, Response, response } from "express";
import { handleHttp } from "../utils/error";
import * as CarService from "../services/CarService";

const getCar = async ({ params }: Request, res: Response) => {
  try {
    const responseCar = await CarService.getCar(Number(params.id));
    res.send(responseCar);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CAR");
  }
};

const getCars = async (req: Request, res: Response) => {
  try {
    const responseCars = await CarService.getCars();
    res.send(responseCars);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CARS");
  }
};

const insertCar = async ({ body }: Request, res: Response) => {
  try {
    const responseCar = await CarService.insertCar(body);
    res.send(responseCar);
  } catch (e) {
    handleHttp(res, "ERROR_PUT_CAR", e);
  }
};

const updateCar = async ({ params, body }: Request, res: Response) => {
  try {
    const responseCar = await CarService.updateCar(Number(params.id), body);
    res.send(responseCar);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CAR");
  }
};

const deleteCar = async ({ params }: Request, res: Response) => {
  try {
    const responseCar = await CarService.deleteCar(Number(params.id));
    res.send(responseCar);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CAR");
  }
};

export { getCar, getCars, updateCar, insertCar, deleteCar };
