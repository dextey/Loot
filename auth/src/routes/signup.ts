import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../../errors/requestValidationError";
import { DatabaseConnectionError } from "../../errors/databaseConnectionError";
import { UserModel } from "../models/UserModel";
import { GeneralError } from "../../errors/generalError";
import jwt from "jsonwebtoken";

const router = Router();

const SECRET_KEY = process.env.JWT_KEY;

router.post(
  "/users/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").trim().isLength({ min: 6 }).withMessage("Please enter a secure password"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    // console.log("Creating a new User");

    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      throw new GeneralError("User exists");
    }

    try {
      const user = UserModel.build({ email, password });
      await user.save();

      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY!);

      req.session = { token: token };

      res.status(201).json({ user });
    } catch (error) {
      throw new DatabaseConnectionError();
    }
  }
);

export { router as signup };
