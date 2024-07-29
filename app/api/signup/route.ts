import { dbConfig } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcrypt"

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, password } = await req.json();
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
