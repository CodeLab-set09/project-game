import { model, models, Schema } from "mongoose";
import { iBlogdata } from "../interfaces";



const BlogModel = new Schema<iBlogdata>(
    {
        video:{
            type:String
        },
        title:{
            type:String
        },
       
        desc:{
            type:String
        },
        image:{
         type:String
        }
        content:{
            type:String
           }
       },
   {timestamps:true}
    
)
 const blogdata = models.blog || model<iBlogdata>("blog", BlogModel);

export default blogdata;
