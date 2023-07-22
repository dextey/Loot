import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: err.message }],
  });
};
