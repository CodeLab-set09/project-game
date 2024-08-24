import { connect } from "mongoose";
import { DB_URL } from "./constant";
import { number } from "zod";

export const dbConfig = async () =>{
  try {
    await connect(DB_URL).then(() => {
      console.log("db connected successfully 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }

};


