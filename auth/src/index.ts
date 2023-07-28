import express from "express";
import "express-async-errors";
import { currentUser } from "./routes/currentUser";
import { signin } from "./routes/signin";
import { signup } from "./routes/signup";
import { signout } from "./routes/signout";
import { handleError } from "../middlewares/errorHandler";
import { NotFoundError } from "../errors/notFoundError";
import mongoose from "mongoose";

import cookieSession from "cookie-session";

const PORT = 5000;

const app = express();
app.set("trust proxy", true);
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: true,
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

const start_server = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Successfully connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`auth listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error Connection to DB");
  }
};

start_server();
