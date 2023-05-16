import {connectToDB} from "@utils/database";
import Prompt from "../../../../../models/prompt";

export const GET = async(req,{params}) =>{
 try{
   await connectToDB();
   const prompts = await Prompt.find({creator: params.id}).populate('creator');
   return new Response(JSON.stringify(prompts), {status:200});

 }catch(error){
   console.log("eeeeeeeeeeeeee api/prompt/route.js:" + error); 
   return new Response("Couldn't retreive prompt's", {status:500});
 }
}