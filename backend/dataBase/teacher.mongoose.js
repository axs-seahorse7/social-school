import mongoose, { mongo, Schema, Types } from "mongoose"

const teacherSchema = new mongoose.Schema({
    teacherName:String,
    contact:Number,
    teacherEmail:String,
    TeacherPosition:String,
    teacherDocuments:{
        type:String,
        required:false
    },
    Schedule:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'classes',
        requied:false
    }],
    VTID:String,
    
})

const Teacher = mongoose.model('Teacher', teacherSchema)

export default Teacher;