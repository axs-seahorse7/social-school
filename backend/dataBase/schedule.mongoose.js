import mongoose, { Schema } from "mongoose"

const scheduleSchema = new mongoose.Schema({
    ScheduleName:String,
    classId:String,
    subject:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    }],
    teacher:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher"
    }],
    date:String

})

const schedule = mongoose.model('schedule', scheduleSchema)

export default schedule