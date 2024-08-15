import { model, models, Schema } from "mongoose";
import { iDataData } from "../interfaces";

const numberModel = new Schema(
  {
    instruction: { type: String, required: true },
    result: { type: [], required: true },
    output: { type: String, required: true },
    example: { type: String, required: true },
    question: { type: String, required: true },
    defaultcode: { type: String, required: true },
    tag: { type: [], required: true },
    usecase: { type: [], required: true },
  },
  { timestamps: true }
);

const myNumberModel =
  models.numbers || model<iDataData>("numbers", numberModel);

export default myNumberModel;
