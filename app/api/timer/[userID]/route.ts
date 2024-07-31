import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();

    const { userID } = params;

    const user = await userModel.findById(userID);

    if (user) {
      if (user.verify) {
        await userModel.findByIdAndUpdate(
          userID,
          {
            firstTimer: false,
          },
          { new: true }
        );

        return NextResponse.json({
          status: 201,
          message: "changing firstTimer status",
        });
      } else {
        return NextResponse.json({
          status: 404,
          error: "Invalid user ID",
        });
      }
    } else {
      return NextResponse.json({
        status: 404,
        error: "Error updating firstTimer",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      error: "Error updating firstTimer",
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();

    const { userID } = params;
    const { level, question, stage } = await req.json();

    const user = await userModel.findById(userID);

    if (user) {
      if (user.verify) {
        await userModel.findByIdAndUpdate(
          userID,
          {
            startPlay: {
              level,
              question,
              stage,
            },
          },
          { new: true }
        );

        return NextResponse.json({
          status: 201,
          message: "changing startPLay status",
        });
      } else {
        return NextResponse.json({
          status: 404,
          error: "Invalid user ID",
        });
      }
    } else {
      return NextResponse.json({
        status: 404,
        error: "Error updating firstTimer",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      error: "Error updating firstTimer",
    });
  }
};

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;
    const user = await userModel.findById(userID);

    console.log("Please get the User: ", user);
    return NextResponse.json({
      status: 200,
      error: "reading user's info",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      error: "Error updating firstTimer",
    });
  }
};
