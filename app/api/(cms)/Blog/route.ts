import { dbConfig } from "@/utils/dbConfig"
import blogdata from "@/utils/model/blogModel"
import { NextRequest, NextResponse } from "next/server"



export const POST =async(req:NextRequest)=>{
try {
    await dbConfig()
    const {title,video,content } = await req.json()

    const blog = await blogdata.create({title,video,content})

    return NextResponse.json({
        status:200,
        message:"blog created",
        data:blog
      })

    } catch (error) {
      return NextResponse.json({
        status:404,
        message:"Unable to create blog"
      })
    }
}
export const GET =async(req:NextRequest)=>{
try {
    await dbConfig()

    const blog = await blogdata.find()

    return NextResponse.json({
        status:200,
        message:"reading blogs",
        data:blog
      })

    } catch (error) {
      return NextResponse.json({
        status:404,
        message:"Error reading blogs"
      })
    }
}