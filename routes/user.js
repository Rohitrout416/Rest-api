import { Router } from "express";
import { display_user, get_user, add_user, delete_user, update_user } from "../controllers/users.js";

const router = Router();

router.get('/users', display_user);

router.get('/users/:id', get_user);

router.post('/users', add_user);

router.delete('/users/:id', delete_user);

router.put('/users/:id', update_user);

export default router;