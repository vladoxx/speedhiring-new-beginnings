import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(`${config.MONGO_URL}`);
    console.log("Mongoose Connect to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
