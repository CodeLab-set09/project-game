import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();

    const { userID } = params;

    const { verify, verifyToken } = await req.json();

    const user = await userModel.findById(userID);

    if (user) {
      if (verifyToken === user.verifyToken && verify) {
        user.verify = true;
        await user.save();
        return NextResponse.json({
          status: 200,
          message: "Account verified successfully",
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
