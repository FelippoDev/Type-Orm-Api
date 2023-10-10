import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

const categoryRouter = Router()

categoryRouter.post("/categories", new CreateCategoryController().handle)
categoryRouter.get("/categories", new GetAllCategoriesController().handle)
categoryRouter.delete("/categories/:id", new DeleteCategoryController().handle)
categoryRouter.put("/categories/:id", new UpdateCategoryController().handle)

export default categoryRouter