import { connect } from "mongoose";
import { DB_URL } from "./constant";
// import { number } from "zod";

export const dbConfig = async () =>{
  try {
    await connect(DB_URL).then(() => {
      console.log("db connected successfully 🚀🚀❤️❤️");
    });
  } catch (error) {
    console.error(error);
  }

};


let number:number=100;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
