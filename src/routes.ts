import { Router } from "express";
import { PalindromeController } from "./controllers/PalindromeController";
import { ChangeController } from "./controllers/ChangeController";
import { VehicleController } from "./controllers/VehicleController";
import { ZipController } from "./controllers/ZipController";


const routes = Router();

routes.post("/palindrome", new PalindromeController().getAllPalindromes);
routes.post("/change", new ChangeController().getChange);
routes.post("/vehicle", new VehicleController().postVehicleInfo);
routes.post("/zipcode", new ZipController().getZipInfo);

export { routes };