import  {Schema, model,models} from "mongoose";

const PromptSchema = new Schema({
   creator: /*{type:mongoose.Schema.Types.ObjectId, ref:'User'}*/ {type:String} ,
   //userId: {type:String, required:[true, "User Id is required"]},
   tag: {type:String, required:[true, "Tag is required"]},
   prompt: {type:String, required:[true, "Prompt is required"]}
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;