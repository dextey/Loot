import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../errors/UnauthorizeError";

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.userData) {
    throw new UnauthorizedError();
  }

  next();
};
