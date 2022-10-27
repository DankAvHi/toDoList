import { Router } from "express";
import getUserController from "../controllers/user/getUser.controller";
import verifyMiddleware from "../middlewares/verify.middleware";
import { GET_USER_ROUTE } from "./../shared/api/user.api.shared";

const userRouter = Router();
userRouter.use(verifyMiddleware);

userRouter.get(GET_USER_ROUTE, getUserController);

export default userRouter;
