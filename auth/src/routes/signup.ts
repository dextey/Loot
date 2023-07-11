import { Router } from "express";

const router = Router();

router.get("/users/signup", (req, res) => {
  res.json({ user: "sigup" });
});

export { router as signup };
