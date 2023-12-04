import { hash, compare } from "bcryptjs";

const encrypt = async (inputPlane: string) => {
  const inputHashed = await hash(inputPlane, 8);
  return inputHashed;
};

const translate = async (inputPlane: string, inputHashed: string) => {
  const isCorrect = await compare(inputPlane, inputHashed);
  return isCorrect;
};

export { encrypt, translate };
