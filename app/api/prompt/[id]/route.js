import {connectToDB} from "@utils/database";
import Prompt from "../../../models/prompt";

export const GET = async(req,{params}) =>{
 try{
   await connectToDB();

   const prompt = await Prompt.findById(params.id).populate('creator');
   if(!prompt){
    return new Response("Couldn't retreive this prompt", {status:404});
   }
 return new Response(JSON.stringify(prompt), {status:200});

 }catch(error){
   console.log("eeeeeeeeeeeeee api/prompt/route.js:" + error); 
   return new Response("Couldn't retreive prompt's", {status:500});
 }
}



export const PATCH = async(req,{params}) => {
 const {prompt,tag} = await req.json();

 try{
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if(!existingPrompt){
      return new Response("Can't patch this prompt", {status:404});  
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), {status:201});
 }catch(error){
    return new Response("Can't patch this prompt");
 }
}


export const DELETE = async(req, {params}) => {
    try{
        await connectToDB();
        const existingPrompt = await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt deleted", {status:201});
    }catch(error){
        return new Response("Can't delete this prompt", {status:500})
    }
   
    
}
