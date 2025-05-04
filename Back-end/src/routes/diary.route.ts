import { Hono } from "hono";
import * as diaryController from "../controllers/diary.controller.ts";

const diaryRouter = new Hono();

diaryRouter.post("/", diaryController.createDairy);

export { diaryRouter };