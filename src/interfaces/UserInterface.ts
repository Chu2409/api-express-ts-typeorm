import { AuthInterface } from "./AuthInterface";

export interface UserInterface extends AuthInterface {
  name: string;
  description: string;
}
