import { Router } from "express";

const router = Router();

router.get("/users/signin", (req, res) => {
  res.json({ signin: "hi there" });
});

export { router as signin };
