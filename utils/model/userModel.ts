import { models, Schema, model } from "mongoose";
import { iUserData } from "../interfaces";

const userSchema = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    verifyToken: {
      type: Number || null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    firstTimer: {
      type: Boolean,
      default: true,
    },
    startPlay: {
      type: {},
      dafault: { level: 1, stage: 1, question: 1 },
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = models.users || model<iUserData>("users", userSchema);

export default userModel;
