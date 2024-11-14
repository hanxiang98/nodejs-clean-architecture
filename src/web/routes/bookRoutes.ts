import { Router } from "express";
import { InMemoryBookRepository } from "../../infrastructure/repositories/InMemoryBookRepository";
import { GetAllBooks } from "../../use-cases/GetAllBooks";
import { BookController } from "../controllers/BookController";

export const bookRouter = Router();
const bookController = new BookController();

bookRouter.get("/allBooks", (req, res) => bookController.getAll(req, res));
