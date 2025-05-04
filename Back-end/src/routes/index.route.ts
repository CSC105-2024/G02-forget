import { Hono } from "hono";
import { userRouter } from "./user.route.ts";
import { diaryRouter } from "./diary.route.ts";

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/todos", diaryRouter);

export { mainRouter };