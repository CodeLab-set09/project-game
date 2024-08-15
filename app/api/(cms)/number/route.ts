import { dbConfig } from "@/utils/dbConfig";
import myNumberModel from "@/utils/model/number";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const {
      instruction,
      answer,
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
    } = await req.json();
    const getD = await myNumberModel.create({
      instruction,
      result: answer.split(","),
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
    });
    return NextResponse.json({
      message: "Number question Added",
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
    const getD = await myNumberModel.find();
    return NextResponse.json({
      message: "Numbers found",
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
