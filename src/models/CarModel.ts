import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CarInterface, gases } from "../interfaces/CarInterface";

@Entity("cars")
export class CarModel implements CarInterface {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  color!: string;

  @Column({
    type: "enum",
    enum: gases,
    default: gases.ELECTRIC,
  })
  gas!: gases;

  @Column()
  year!: number;

  @Column()
  description!: string;

  @Column()
  price!: number;
}
