import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { UserModel } from "../models/UserModel";
import { GeneralError, validateRequest } from "@lootick/common";
import { Hash } from "../utils/hash";
import jwt from "jsonwebtoken";
const router = Router();

router.post(
  "/users/signin",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").trim().notEmpty().withMessage("password is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new GeneralError("Invalid email or password");
    }

    const authorzied = Hash.compare(user.password, password);
    if (!authorzied) throw new GeneralError("Invalid email or password");

    // generating token to authorized user
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY!);

    req.session = {
      token: token,
    };

    res.status(200).send({ signin: "success" });
  }
);

export { router as signin };
