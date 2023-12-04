import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserInterface } from "../interfaces/UserInterface";

@Entity("users")
export class UserModel implements UserInterface {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
