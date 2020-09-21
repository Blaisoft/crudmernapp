const mongoose=require("mongoose")

var PostMessage=mongoose.model('postmessages',{

    title:{
        type:String,
        required:true
    },
    message:
    {
        type:String,
        required:true
    }

},'postmessages')


module.exports= {PostMessage}