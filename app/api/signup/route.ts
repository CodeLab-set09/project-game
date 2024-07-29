import { dbConfig } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import userModel from "@/utils/model/userModel";
import { AccountOpening } from "@/utils/email";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const rand = () => {
      return Math.floor(Math.random() * 1000000 + 1);
    };
    const user = await userModel.create({
      name,
      email,
      password: hashed,
      verifyToken: rand(),
    });
    AccountOpening(user);
    return NextResponse.json({
      message: "User created",
      status: 200,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
