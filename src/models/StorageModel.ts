import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { StorageInterface } from "../interfaces/StorageInterface";

@Entity("storage")
export class StorageModel implements StorageInterface {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: "file_name",
  })
  fileName!: string;

  @Column({
    name: "user_id",
  })
  userId!: number;

  @Column()
  path!: string;
}
