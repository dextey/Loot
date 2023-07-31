import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validateRequest";
const router = Router();

router.post(
  "/users/signin",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").trim().notEmpty().withMessage("password is required"),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.json({ signin: "success" });
  }
);

export { router as signin };
