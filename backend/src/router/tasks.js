import { Router } from "express";
import {
  getTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controllers/tasks.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createTaskSchema, updateTaskSchema } from "../validation/tasks.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get("/", ctrlWrapper(getTasksController));
router.post(
  "/",
  validateBody(createTaskSchema),
  ctrlWrapper(createTaskController),
);
router.patch(
  "/:id",
  validateBody(updateTaskSchema),
  ctrlWrapper(updateTaskController),
);
router.delete("/:id", ctrlWrapper(deleteTaskController));

export default router;
