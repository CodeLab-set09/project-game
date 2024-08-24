import { dbConfig } from "@/utils/dbConfig"
import blogdata from "@/utils/model/blogModel"
import {NextRequest, NextResponse } from "next/server"



export const GET =async(req:NextRequest, {params}:any)=>{
  try {
      await dbConfig()
      
      const {blogID} = await params;
    
      const personal = await blogdata.findById(blogID)
      
  
      return NextResponse.json({
          status:200,
          message:"getting blog",
          data:personal
        })
  
      } catch (error:any) {
        return NextResponse.json({
          status:404,
          message:"Error getting blog",
          error:error.message
        })
      }
  }
  