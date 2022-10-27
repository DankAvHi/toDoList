import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";

const changeUserController: RequestHandler = async (req, res) => {
     try {
          res.json({ succes: true });
     } catch (error) {
          requestServerError(error, res);
     }
};

export default changeUserController;
