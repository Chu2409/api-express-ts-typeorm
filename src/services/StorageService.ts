import { DB } from "../config/postgres";
import { StorageModel } from "../models/StorageModel";
import { StorageInterface } from "../interfaces/StorageInterface";

const storageRepository = DB.getRepository(StorageModel);

const register = async (storage: StorageInterface) => {
  return (await storageRepository.save(storage)) as StorageModel;
};

export { register };
