import { dbConfig } from "@/utils/dbConfig"
import blogdata from "@/utils/model/blogModel"
import { NextRequest, NextResponse } from "next/server"



export const POST =async(req:NextRequest)=>{
try {
    await dbConfig()
    const {title,video,content,desc,image } = await req.json()

    const blog = blogdata.create({title,video,content,desc,image })
    return NextResponse.json({
        status:200,
        message:"blog created successfully",
        data:blog
    })
    }
    catch(error){
        return NextResponse.json({
            status:400,
            message:"unable to create blogs",
        })
    }
}
export const GET =async()=>{
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
