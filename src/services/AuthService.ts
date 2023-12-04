import { translate } from "../utils/bcrypt";
import { AuthInterface } from "../interfaces/AuthInterface";
import { getUserByEmail } from "../services/UserService";
import { generateToken } from "../utils/jwt";

const login = async ({ email, password }: AuthInterface) => {
  const userFound = await getUserByEmail(email);
  //console.log(userFound);

  if (!userFound) return "NOT_FOUND_USER";

  const passwordHashed = userFound.password;
  const isCorrect = await translate(password, passwordHashed);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(userFound.id);

  const data = {
    token,
    user: userFound,
  };
  return data;
};

export { login };
