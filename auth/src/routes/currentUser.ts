import { Router } from "express";

const router = Router();

router.get("/users/currentuser", (req, res) => {
  res.json({ user: "hopper" });
});

export { router as currentUser };
