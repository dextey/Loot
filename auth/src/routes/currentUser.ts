import { Router } from "express";
import { userData } from "@lootick/common";

const router = Router();

router.get("/users/currentuser", userData, (req, res) => {
  res.json({ currentUser: req.userData || null });
});

export { router as currentUser };
