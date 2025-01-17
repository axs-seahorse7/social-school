import mongoose, { mongo } from "mongoose"

const studentSchema = new mongoose.Schema({
    studentName:{
        type: String,
        required:true,
        trim:true
    },
    studentProfile:{
        type:String
    },
    DateofBirth:{
        type:Number,
    },
    PhoneNumber:{
        type:Number
    },
    Email:{
        type:String
    },
    Father:{
        fatherName: String,
        fatherEmail: String,
        fatherNumber: Number
    },
    Mother:{
        motherName: String,
        motherEmail: String,
        motherNumber: Number
    },
    class: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Class', 
        required: [true, 'Class ID is required'],
      },
    Documents:{
        marsheet:[{
            type:String
        }],
        documents:[{
            type:String
        }],
    }  

})

const Student = mongoose.model('Student', studentSchema)
export default Student;