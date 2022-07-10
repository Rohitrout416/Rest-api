import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import Userrouter from './routes/user.js'

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

app.listen(process.env.PORT, ()=>{
    console.log('server is running on port', process.env.PORT);
});