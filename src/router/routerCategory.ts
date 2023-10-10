import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";

const categoryRouter = Router()

categoryRouter.post("/categories", new CreateCategoryController().handle)

export default categoryRouter