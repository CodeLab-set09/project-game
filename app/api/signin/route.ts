import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password } = req.json();
    const user = await userModel.findOne({ email });
    if (user) {
      const check = await bcrypt.compare(password, user.password);
    } else {
      return NextResponse.json({
        message: "error getting user",
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "error signing in user",
      status: 404,
      error: error.message,
    });
  }
};
