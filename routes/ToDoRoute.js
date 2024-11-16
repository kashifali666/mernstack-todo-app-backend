import { Router } from "express";
import getToDo, {
  deleteTodo,
  saveToDo,
  updateTodo,
} from "../controllers/ToDoController.js";

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

export default router;
