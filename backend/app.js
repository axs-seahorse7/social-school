import express from "express";
import cors from 'cors';


const app = express();
app.use(cors());


app.get('/api/data', (req, res)=>{

    const subjectsList = [
        {
            name: "Mathematics",
            status: "Live",
            schedule: "2025-01-04 10:00 AM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        },
        {
            name: "Science",
            status: "Upcoming",
            schedule: "2025-01-05 11:30 AM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        },
        {
            name: "History",
            status: "Live",
            schedule: "2025-01-06 09:00 AM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        },
        {
            name: "English",
            status: "Upcoming",
            schedule: "2025-01-07 01:30 PM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        },
        {
            name: "Geography",
            status: "Live",
            schedule: "2025-01-08 03:00 PM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        },
        {
            name: "Computer Science",
            status: "Upcoming",
            schedule: "2025-01-09 12:00 PM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        },
        {
            name: "Physics",
            status: "Live",
            schedule: "2025-01-10 02:30 PM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        },
        {
            name: "Chemistry",
            status: "Upcoming",
            schedule: "2025-01-11 04:00 PM",
            lesson: `Chapter ${Math.ceil(Math.random() * 3)}`
        }
    ];         
    res.json(subjectsList)
})

app.listen(3000, ()=>{
    console.log('app listen on port 3000')
})