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

interface iData {
  instruction: string;
  result: Array<string>;
  output: string;
  example: string;
  question: string;
  defaultcode: string;
  url: string;
  tag: string[];
  usecase: string[];
}
export interface iDataData extends iData, Document {}

interface iBlog {
  title:string;
  video:string;
  desc:string;
  image:string;
  content:string;
  
}
export interface iBlogdata extends iBlog, Document {}

