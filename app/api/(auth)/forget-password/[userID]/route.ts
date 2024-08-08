import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();

    const { userID } = params;

    const { password } = await req.json();

    const user = await userModel.findById(userID);

    if (user) {
      if (user?.verifyToken !== null && user.verify) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const changePassword = await userModel.findByIdAndUpdate(
          userID,
          {
            password: hashed,
          },
          { new: true }
        );
        return NextResponse.json({
          status: 201,
          message: "Account password changed successfully",
          data: changePassword,
        });
      } else {
        return NextResponse.json({
          status: 404,
          error: "Invalid verification token",
        });
      }
    } else {
      return NextResponse.json({
        status: 404,
        error: "email not found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      error: "unable to verify account",
    });
  }
};
