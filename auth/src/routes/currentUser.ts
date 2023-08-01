import { Router } from "express";
import { userData } from "../../middlewares/getUserData";

const router = Router();

router.get("/users/currentuser", userData, (req, res) => {
  res.json({ currentUser: req.userData || null });
});

export { router as currentUser };
