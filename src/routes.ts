import { Router } from "express";
import { PalindromeController } from "./controllers/PalindromeController";

const routes = Router();

routes.post("/palindrome", new PalindromeController().handle);

export { routes };