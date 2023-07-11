import { Router } from "express";

const router = Router();

router.get("/users/signout", (req, res) => {
  res.json({ user: "signout" });
});

export { router as signout };
