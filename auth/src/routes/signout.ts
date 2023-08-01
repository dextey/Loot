import { Router } from "express";

const router = Router();

router.post("/users/signout", (req, res) => {
  req.session = null;
  res.status(200).send("signout");
});

export { router as signout };
