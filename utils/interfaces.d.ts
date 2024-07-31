import { Document } from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
  avatar: string;
  avatarID: string;
  verifyToken: number | null;
  verify: boolean;
  firstTimer: boolean;
  startPlay: {};
}

export interface iUserData extends iUser, Document {}
