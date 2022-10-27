import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import { GetUserResponse } from "./../../shared/types/user.d";

const getUserController: RequestHandler = async (req, res) => {
     try {
          const { user } = req;

          if (!user) return res.status(403).json({ error: "unauth" });

          const response: GetUserResponse = { ...user };

          return res.json({ ...response });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default getUserController;
