import express from "express";
import { connectdb } from "./Config/connectDB.js";
import fileUploadRoutes from "./Router/fileUploadRoutes.js";
import employeeRouter from "./Router/employeeRouter.js";
import attendanceRouter from './Router/atttendanceRoutes.js'
import salaryController from "./Controller/salaryController.js";
import { userRouter } from "./Router/userRouter.js";
import cors from 'cors'
const port = 8080
const app = express();

app.use(cors({
    origin: ['https://crm-basic-2.vercel.app','http://localhost:5173'], // your frontend origin
    credentials: true,
  }))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send('hello')
})


app.use('/users',userRouter)
app.use('/employee', employeeRouter)
app.use('/fileUpload', fileUploadRoutes)
app.use('/attendance', attendanceRouter)
connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is listening on http://localhost:${port}`)
    })
}).catch((error)=>{
    console.log(error)
});



