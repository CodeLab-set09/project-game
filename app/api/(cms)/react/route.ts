import { dbConfig } from "@/utils/dbConfig";
import MYReactModel from "@/utils/model/ReactModel";

import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest,res:NextResponse) => {
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
    const getD = await MYReactModel.create({
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
      message: "React question Added",
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
    const getD = await MYReactModel.find();
    return NextResponse.json({
      message: "React Question found",
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
