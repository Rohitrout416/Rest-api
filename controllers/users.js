import { v4 as uuidV4 } from 'uuid';
import userDetails from "../models/userModel.js"


let users = [
    {
        "name": "john",
        "age": "21",
        id: uuidV4()
    },

    {
        "name": "Rohit",
        "age": "21",
        id: uuidV4()
    },

    {
        "name": "Dhruba",
        "age": "51",
        id: uuidV4()
    }
]

//get all users
/*export const display_user = (req, res)=>{
    res.json(users);
}*/

//get all users with db
export const display_user = async(req, res)=>{
    const users = await userDetails.find({}).sort({createdAt: -1});

    res.status(200).json(users);
}

export const get_user = (req, res)=>{
    const userId = req.params.id;

    const user = users.find(user => user.id === userId)

    res.json(user)
}

export const add_user = async(req, res)=>{
    const {name: name, age: age, Aadhar: Aadhar} = req.body;
    users.push({
        name,
        age,
        id: uuidV4()
    })

    try {
        const userdetails = await userDetails.create({name, age, Aadhar});
        res.status(200).json(userdetails);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // res.json(users)
}

export const delete_user = (req, res)=>{
    const userId = req.params.id;

    users = users.filter(user => user.id !== userId);
    res.json(users);
}

export const update_user = (req, res)=>{
    const userId = req.params.id;
    const {name, age} = req.body;

    users = users.map((user)=>{
        if (user.id === userId) {
            return{
                name,
                age,
                id: userId
            }
        }
        return user;
    })
    res.json(users);
}