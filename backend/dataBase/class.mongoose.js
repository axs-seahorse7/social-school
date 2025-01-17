import mongoose, { Schema, Types } from "mongoose"

const classSchema = new mongoose.Schema({
    classNames:String,
    teachers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:false,
    }],
    subject:[{
        type:mongoose.Types.mongoose.ObjectId,
        ref:'Subject',
        required:false,
    }],
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
        required:false,
    }]
})

const classes = mongoose.model('Classes', classSchema)
export default classes;