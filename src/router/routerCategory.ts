import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { GetAllVideosController } from "../controllers/GetAllVideosController";

const router = Router()

router.post("/categories", new CreateCategoryController().handle)
router.get("/categories", new GetAllCategoriesController().handle)
router.delete("/categories/:id", new DeleteCategoryController().handle)
router.put("/categories/:id", new UpdateCategoryController().handle)

router.post("/videos", new CreateVideoController().handle)
router.get("/videos", new GetAllVideosController().handle)

export default router