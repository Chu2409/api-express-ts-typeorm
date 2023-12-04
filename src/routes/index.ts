import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = __dirname;

const router = Router();

const cleanFile = (fileName: string) => {
  return fileName.split(".").shift();
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFile(fileName);
  if (cleanName !== "index") {
    import("./" + cleanName).then((module) => {
      //console.log("Route loading... /" + cleanName);
      router.use("/" + cleanName, module.router);
    });
  }
});

export { router };
