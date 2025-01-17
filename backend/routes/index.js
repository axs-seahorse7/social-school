import express, { Router } from 'express'
import subjectModule from "../dataBase/subjects.mongoose.js"
import TeacherModule from '../dataBase/teacher.mongoose.js'
import classModule from '../dataBase/class.mongoose.js'
import UUID from '../Generator/UUID.random.js';
const router = express.Router()

router.post('/api/subjects',async function(req,res){
    try{
        const {name, time, teacher, classes } = req.body
        console.log(req.body)
        if(!name){
            return res.status(400).send('name not found from body');
        }
        const newSubject 
            = new subjectModule({
                subjectName:name,
                classes:classes,
                teacher:teacher,
                schedule:time,
            })

        await newSubject.save();
        console.log(newSubject);
        res.json(newSubject)
    }catch(err){
        res.status(500).send("subject creating failed !")
        console.log('backend err:', err.message)
    }
})
router.get('/api/subjects', async (req, res)=>{
    try{
        const subjects = await subjectModule.find().populate('teacher', 'teacherName')
        res.json(subjects)

    }   catch(err){
        res.json(err.message)
        res.status(500).send("failed to find subjects ")
    } 
})
router.post('/api/teacher', async (req, res)=>{
    const VTID = UUID()
    try{
        const {teacherName, teacherPhone, teacherEmail, teacherPosition, teacherDocument, schedule } = req.body;
        const newTeacher = new TeacherModule({
            teacherName:teacherName,
            contact:teacherPhone,
            teacherEmail:teacherEmail,
            TeacherPosition:teacherPosition,
            teacherDocuments:teacherDocument || null,
            Schedule: schedule || null,
            VTID:VTID
        })
        await newTeacher.save()
        console.log(newTeacher)
        res.json(newTeacher)
    }catch(err){
        console.log('teacher creation failed', err.message)
        res.status(500).send(err.message)
    }
})
router.get('/api/teacher', async (req, res)=>{
    try{
        const teachers = await TeacherModule.find();
        res.json(teachers);
    }catch(err){
        console.log('teachers module not found')
        res.status(500).send(err.message)
    }
})
router.post('/api/classes', async (req, res)=>{
    try{
        const {clasName} = req.body;
        if(!clasName){
            return res.status(400).send('clasName not recieved ')
        }
        const newClass = new classModule({
            classNames:clasName,
        })
        await newClass.save()
        console.log(newClass);
        res.json(newClass)
    }catch(err){
        console.log('subject not created')
        res.status(400).send(err.message)
    }

})
router.get('/api/classes', async (req, res)=>{
    try{
        const classes = await classModule.find()
        res.json(classes);
    }catch(err){
        console.log('classes are not found ')
        res.status(400).send(err.message)
    }
})
export default router
