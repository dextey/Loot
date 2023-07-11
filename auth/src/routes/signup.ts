import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { handleError } from "../../middlewares/errorHandler";

const router = Router();

router.get(
  "/users/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").trim().isLength({ min: 6 }).withMessage("Please enter a secure password"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new Error("Invalid email or password");
    }

    try {
      console.log("Creating a new User");

      const { email, password } = req.body;
      res.json({ user: email });
    } catch (error) {
      throw new Error("Database down");
    }
  }
);

export { router as signup };
