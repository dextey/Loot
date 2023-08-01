import { Router } from "express";
import jwt from "jsonwebtoken";
const router = Router();

router.get("/users/currentuser", (req, res) => {
  console.log(req.session);

  if (!req.session?.token) {
    return res.status(401).json({ currentUser: null });
  }

  try {
    const payload = jwt.verify(req.session.token, process.env.JWT_KEY!);
    res.status(200).json({ currentUser: payload });
  } catch (error) {
    return res.status(401).json({ currentUser: null });
  }

  res.json({ user: "hopper" });
});

export { router as currentUser };
