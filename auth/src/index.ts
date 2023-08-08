import mongoose from "mongoose";
import { app } from "./app";

const PORT = 5000;

const start_server = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY missing");
    }

    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Successfully connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`auth listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start_server();
