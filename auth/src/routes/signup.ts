import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError } from "../../errors/databaseConnectionError";
import { UserModel } from "../models/UserModel";
import { GeneralError } from "../../errors/generalError";
import jwt from "jsonwebtoken";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

const SECRET_KEY = process.env.JWT_KEY;

router.post(
  "/users/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").trim().isLength({ min: 6 }).withMessage("Please enter a secure password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      throw new GeneralError("User exists");
    }

    try {
      const user = UserModel.build({ email, password });
      await user.save();
      console.log("Creating a new User");

      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY!);

      req.session = { token: token };

      res.status(201).json({ user });
    } catch (error) {
      throw new DatabaseConnectionError();
    }
  }
);

export { router as signup };
