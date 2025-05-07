import express from "express";
import { connectdb } from "./Config/connectDB.js";
import employeeRouter from "./Router/employeeRouter.js";
import cors from 'cors'
const port = 8080
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // your frontend origin
    credentials: true,
  }))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send('hello')
})

app.use('/employee', employeeRouter)

connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is listening on http://localhost:${port}`)
    })
}).catch((error)=>{
    console.log(error)
});



