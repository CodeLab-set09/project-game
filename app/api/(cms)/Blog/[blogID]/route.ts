import { dbConfig } from "@/utils/dbConfig"
import blogdata from "@/utils/model/blogModel"
import {NextResponse } from "next/server"



export const GET =async({params}:any)=>{
  try {
      await dbConfig()
      
      const {blogID} = params;
    
      const personal = await blogdata.findById(blogID)
      
  
      return NextResponse.json({
          status:200,
          message:"getting blog",
          data:personal
        })
  
      } catch (error) {
        return NextResponse.json({
          status:404,
          message:"Error getting blog"
        })
      }
  }
  