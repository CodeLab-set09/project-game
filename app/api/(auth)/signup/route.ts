import { dbConfig } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import userModel from "@/utils/model/userModel";
import { AccountOpeningEmail } from "@/utils/email";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { userName, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const rand = () => {
      return Math.floor(Math.random() * (99999 - 10000 + 1) + 99999);
    };

    const user = await userModel.create({
      userName,
      email,
      password: hashed,
      verifyToken: rand(),
    });

    AccountOpeningEmail(user);

    return NextResponse.json({
      message: "User created",
      status: 201,
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

export const GET = async () => {
  try {
    await dbConfig();
    const user = await userModel.find();
    return NextResponse.json({
      message: "All Users",
      data: user,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
