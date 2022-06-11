import { Router } from "express";
import { PalindromeController } from "./controllers/PalindromeController";
import { ChangeController } from "./controllers/ChangeController";

const routes = Router();

routes.post("/palindrome", new PalindromeController().getAllPalindromes);
routes.post("/change", new ChangeController().getChange);

export { routes };