import express from "express";
import "express-async-errors";
import { currentUser } from "./routes/currentUser";
import { signin } from "./routes/signin";
import { signup } from "./routes/signup";
import { signout } from "./routes/signout";
import { handleError } from "../middlewares/errorHandler";
import { NotFoundError } from "../errors/notFoundError";
import cors from "cors";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(express.json());

app.use(cors());

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use("/api", signin);
app.use("/api", signup);
app.use("/api", signout);
app.use("/api", currentUser);

app.get("/", (req, res) => {
  res.send(`Express server running`);
});

app.all("*", (req, res) => {
  throw new NotFoundError();
});

app.use(handleError);

export { app };
