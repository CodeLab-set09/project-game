import { dbConfig } from "@/utils/dbConfig";
import { resetPasswordEmail } from "@/utils/email";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest) => {
  try {
    await dbConfig();

    const { email } = await req.json();
    const user = await userModel.findOne({ email });

    const rand = Math.floor(Math.random() * (99999 - 10000 + 1) + 99999);

    if (user.verify && !user.verifyToken) {
      const forgetPassword = await userModel.findByIdAndUpdate(
        user._id,
        {
          verifyToken: rand,
        },
        { new: true }
      );

      resetPasswordEmail(forgetPassword);

      return NextResponse.json({
        message: "password changed",
        status: 201,
        data: forgetPassword,
      });
    } else {
      return NextResponse.json({
        message: "Please verify account",
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error: error,
      status: 404,
    });
  }
};
