import { Document } from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
  avatar: string;
  avatarID: string;
  verifyToken: number;
  verify: boolean;
}

export interface iUserData extends iUser, Document {}
