import { dbConfig } from "@/utils/dbConfig";

import { NextRequest, NextResponse } from "next/server";
import myQModel from "../../../../utils/model/q&aModel";

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
    const getD = await myQModel.create({
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
      message: "Created Successfully",
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

export const GET = async () => {
  try {
    await dbConfig();
    const getD = await myQModel.find();
    return NextResponse.json({
      message: "Strings",
      data: getD,
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
