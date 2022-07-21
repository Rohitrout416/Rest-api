import { Router } from "express";
import { display_user, get_user, add_user, delete_user, update_user } from "../controllers/users.js";

const router = Router();

router.get('/', display_user);

router.get('/:id', get_user);

router.post('/', add_user);

router.delete('/:id', delete_user);

router.put('/:id', update_user);

export default router;