import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { CarModel } from "../models/CarModel";
import { UserModel } from "../models/UserModel";
import { StorageModel } from "../models/StorageModel";

export const DB = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [CarModel, UserModel, StorageModel],
});
