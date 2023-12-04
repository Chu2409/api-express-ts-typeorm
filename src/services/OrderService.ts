import { CarModel } from "../models/CarModel";
import { DB } from "../config/postgres";
import { CarInterface } from "../interfaces/CarInterface";

const carRepository = DB.getRepository(CarModel);

const getOrders = async () => {
  return await carRepository.find();
};

export { getOrders };
