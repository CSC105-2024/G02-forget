import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getInfoUser);
userRouter.post("/signin", userController.signinUser)
userRouter.get("/diaries/:id/:month/:year", userController.getDiaryFromUser);
userRouter.patch("/template/:id", userController.changeTemplate);
userRouter.get("/template/:id", userController.getTemplate);

export { userRouter };