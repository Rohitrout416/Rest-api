import { v4 as uuidV4 } from 'uuid';

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

export const display_user = (req, res)=>{
    res.json(users);
}

export const get_user = (req, res)=>{
    const userId = req.params.id;

    const user = users.find(user => user.id === userId)

    res.json(user)
}

export const add_user = (req, res)=>{
    const {name: name, age: age} = req.body;
    users.push({
        name,
        age,
        id: uuidV4()
    })

    res.json(users)
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