import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "llave_menos_secreta";

const generateToken = (id: number) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (token: string) => {
  const isOk = verify(token, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
