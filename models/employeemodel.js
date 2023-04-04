const mongoose=require('mongoose')
const empSchema= mongoose.Schema(
    {
       "name":{
        type:String,
        required:[true,"name is mandatory"]
       },

       "age":{
        type:Number,
        required:true,
       },

       "location":{
        type:String,
        required:false,

       },

       "image":{
        type: String,
        required:false,
       }
    },

    {
        timeStamps:true
    }
)

const empModel=mongoose.model('empmodel',empSchema)

module.exports=empModel;