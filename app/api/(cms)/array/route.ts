import { dbConfig } from "@/utils/dbConfig";
import myArrayModel from "@/utils/model/arrayModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const {
      instruction,
      mainAnswer,
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
    } = await req.json();
    const getD = await myArrayModel.create({
      instruction,
      mainAnswer,
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
    });
    return NextResponse.json({
      message: "Array question Added",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const getD = await myArrayModel.find();
    return NextResponse.json({
      message: "Arrays found",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      error: error.message,
      status: 400,
    });
  }
};
