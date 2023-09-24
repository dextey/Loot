import { app } from "./app";
import mongoose from "mongoose";

const PORT = 5001;

const start_server = async () => {
  //   try {
  //     await mongoose.connect("mongodb://ticket-mongo-srv:27017/ticket");
  //   } catch (error) {
  //     console.log(error);
  //   }

  app.listen(PORT, () => {
    console.log("Ticker server listeing at PORT = ", PORT);
  });
};

start_server();
