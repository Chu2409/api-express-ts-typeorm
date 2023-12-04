import { CarModel } from "../models/CarModel";
import { DB } from "../config/postgres";
import { CarInterface } from "../interfaces/CarInterface";

const carRepository = DB.getRepository(CarModel);

const getCars = async () => {
  return await carRepository.find();
};

const getCar = async (id: number) => {
  return await carRepository.findOneBy({ id: id });
};

const insertCar = async (car: CarInterface) => {
  return (await carRepository.save(car)) as CarModel;
};

const updateCar = async (id: number, car: CarInterface) => {
  const carToUpdate = await getCar(id);
  return carRepository.save({
    ...carToUpdate,
    ...car,
  } as CarModel);
};

const deleteCar = async (id: number) => {
  const carToDelete = await getCar(id);
  return await carRepository.remove(carToDelete as CarModel);
};

export { getCars, getCar, insertCar, updateCar, deleteCar };
