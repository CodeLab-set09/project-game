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
      type: Number,
    },
    verify: {
      type: Boolean,
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
