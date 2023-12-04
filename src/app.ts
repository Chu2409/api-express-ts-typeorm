import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { DB } from "./config/postgres";

const PORT = process.env.PORT || 3001;

DB.initialize().then(async () => {
  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(router);

  app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
  });
});
