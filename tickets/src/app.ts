import express from "express";
import { getTicket } from "./routes/getTicket";

const app = express();
app.use(express.json());

app.use("/api", getTicket);

export { app };
