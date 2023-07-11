import { Request, Response, NextFunction } from "express";

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log({ error: err.message });

  res.status(400).send({
    msg: err.message,
  });
};
