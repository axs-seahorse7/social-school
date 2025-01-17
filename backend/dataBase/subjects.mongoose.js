import mongoose, { Schema } from "mongoose"

const subjectSchema = new mongoose.Schema({
    subjectName:String,
    classes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'classes',
        required:false
    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:false
    },
    schedule:String
})

const Subject = mongoose.model('Subject', subjectSchema)

export default Subject