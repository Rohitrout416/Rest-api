import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import Userrouter from './routes/user.js'
import mongoose from 'mongoose';

const port = 3000;

const app = express();

app.use(express.json())

app.use('/api', Userrouter)

app.get('/',(req, res)=>{
    res.json({
        "name":"Rohit",
        "age": "21"
    })
}
)

//connect to database
mongoose.connect(process.env.URI, {useNewUrlParser: true})
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('connected to db and server is running on port', process.env.PORT);
    });
})
.catch((error)=>{
    console.log(error);
})