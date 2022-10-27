import { Router } from "express";
import { AUTH_ROUTE } from "./../shared/api/auth.api.shared";
import { USER_ROUTE } from "./../shared/api/user.api.shared";
import authRouter from "./auth.api";
import userRouter from "./user.api";

const apiRouter = Router();

apiRouter.use(USER_ROUTE, userRouter);
apiRouter.use(AUTH_ROUTE, authRouter);

export default apiRouter;
