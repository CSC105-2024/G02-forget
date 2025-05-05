import { Hono } from "hono";
import * as diaryController from "../controllers/diary.controller.ts";

const diaryRouter = new Hono();

diaryRouter.post("/", diaryController.createDairy);
diaryRouter.delete("/:id", diaryController.deleteDiary);
diaryRouter.patch("/:id", diaryController.editDiary);
diaryRouter.patch("/lock/:id", diaryController.lockDairy);

export { diaryRouter };