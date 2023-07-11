import express from "express";
import { currentUser } from "./routes/currentUser";
import { signin } from "./routes/signin";
import { signup } from "./routes/signup";
import { signout } from "./routes/signout";

const PORT = 5000;

const app = express();
app.use(express.json());

app.use("/api", signin);
app.use("/api", signup);
app.use("/api", signout);
app.use("/api", currentUser);

app.get("/", (req, res) => {
  res.send(`Express server running`);
});

app.listen(PORT, () => {
  console.log(`auth listening on port ${PORT}`);
});
