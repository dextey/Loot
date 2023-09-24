import { Router, Response, Request } from "express";

const router = Router();

router.get("/ticket", (req: Request, res: Response) => {
  res.status(200).json({ ticket: { value: "u39xm483ms9s" } });
});

export { router as getTicket };
