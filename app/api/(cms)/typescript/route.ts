import { dbConfig } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import myTypescriptModel from "../../../../utils/model/typescriptmodel";

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
    const getD = await myTypescriptModel.create({
      instruction,
      result: mainAnswer.split(","),
      output,
      example,
      question,
      defaultcode,
      url,
      tag,
      usecase,
    });
    return NextResponse.json({
      message: "typescript question Added",
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
    const getD = await myTypescriptModel.find();
    return NextResponse.json({
      message: "typescript questions found",
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
