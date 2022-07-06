import express, {  Router } from "express";
import {v4 as uuidV4} from 'uuid'

const router = Router();

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

router.get('/users', (req, res)=>{
    res.json(users);
})

router.get('/users/:id', (req, res)=>{
    const userId = req.params.id;

    const user = users.find(user => user.id === userId)

    res.json(user)
})

router.post('/users', (req, res)=>{
    const {name: name, age: age} = req.body;
    users.push({
        name,
        age,
        id: uuidV4()
    })

    res.json(users)
})

router.delete('/users/:id', (req, res)=>{
    const userId = req.params.id;

    users = users.filter(user => user.id !== userId);
    res.json(users);
})

router.put('/users/:id', (req, res)=>{
    const userId = req.params.id;

    const user = users.map((user)=>{
        if (user.id == userId) {
            return{
                name,
                age,
                id: userId
            }
        }
        return user;
    })
    res.json(users);
})

export default router;