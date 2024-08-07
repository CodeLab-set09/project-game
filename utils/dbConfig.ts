import { connect } from "mongoose";
import { DB_URL, DB_URLII } from "./constant";

export const dbConfig = async () => {
  try {
    await connect(DB_URL).then(() => {
      console.log("db connected successfully 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }
};
