import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      userData?: UserPayload;
    }
  }
}

export const userData = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.token) {
    return next();
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.userData = payload;
  } catch (error) {}

  next();
};
