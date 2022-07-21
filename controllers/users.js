import { v4 as uuidV4 } from 'uuid';
import userDetails from "../models/userModel.js"
import mongoose from 'mongoose';


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

//get one user
// export const get_user = (req, res)=>{
//     const userId = req.params.id;

//     const user = users.find(user => user.id === userId)

//     res.json(user)
// }


//get one user with mongodb
export const get_user = async(req, res)=>{
    const { id: userId } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(userId))
    {
        return res.status(404).json({error:"No such user!"});
    }
    
    const user = await userDetails.findById(userId);
    
    res.status(200).json(user);
}

export const add_user = async(req, res)=>{
    const {name: name, age: age, Aadhar: Aadhar} = req.body;
    
    try {
        const userdetails = await userDetails.create({name, age, Aadhar});
        res.status(200).json(userdetails);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // res.json(users)
}

//delete a user
// export const delete_user = (req, res)=>{
    //     const userId = req.params.id;
    
    //     users = users.filter(user => user.id !== userId);
    //     res.json(users);
    // }
    
    //delete a user with mongodb
    export const delete_user = async(req, res)=>{
        const {id: userId} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(userId))
        {
            return res.status(404).json({error:"No such user!"});
        }
        
        const users = await userDetails.findOneAndDelete({_id: userId});
        
        if(!users)
        {
            return res.status(400).json({error:"No such error!"});
        }
        
        res.status(200).json(users);
        
    }
    
    //update a user
    // export const update_user = (req, res)=>{
        //     const userId = req.params.id;
        //     const {name, age} = req.body;
        
        //     users = users.map((user)=>{
            //         if (user.id === userId) {
                //             return{
                    //                 name,
                    //                 age,
                    //                 id: userId
                    //             }
                    //         }
                    //         return user;
                    //     })
                    //     res.json(users);
                    // }
                    
                    
//update a user with mongodb
export const update_user = async(req, res)=>{
    const { id: userId } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(userId))
    {
        return res.status(404).json({error:"No such user!"});
    }

    const user = await userDetails.findOneAndUpdate({_id: userId},{...req.body});

    if(!user)
    {
        return res.status(400).json({error: "No such user!"});
    }

    res.status(200).json(user);

}