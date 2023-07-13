import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../../errors/requestValidationError";
import { DatabaseConnectionError } from "../../errors/databaseConnectionError";

const router = Router();

router.post(
  "/users/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").trim().isLength({ min: 6 }).withMessage("Please enter a secure password"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    try {
      console.log("Creating a new User");

      const { email, password } = req.body;
      res.json({ user: email });
    } catch (error) {
      throw new DatabaseConnectionError();
    }
  }
);

export { router as signup };
