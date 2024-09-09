import { model, models, Schema } from "mongoose";
import { iDataData } from "../interfaces";

const ReactModel = new Schema<iDataData>(
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

const MYReactModel =
  models.questions || model<iDataData>("React questions", ReactModel);

export default MYReactModel;
