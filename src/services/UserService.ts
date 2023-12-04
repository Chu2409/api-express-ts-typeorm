import { UserInterface } from "../interfaces/UserInterface";
import { DB } from "../config/postgres";
import { UserModel } from "../models/UserModel";
import { encrypt } from "../utils/bcrypt";

const UserRepository = DB.getRepository(UserModel);

const register = async (newUser: UserInterface) => {
  const userFound = await getUserByEmail(newUser.email);
  if (userFound) return "ALREADY_USER";

  newUser.password = await encrypt(newUser.password);
  const userRegistered = await UserRepository.save(newUser);
  return userRegistered as UserModel;
};

const getUserByEmail = async (email: string) => {
  return await UserRepository.findOneBy({ email });
};
export { register, getUserByEmail };
