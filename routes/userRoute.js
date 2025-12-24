import express from 'express';
import { getUser, insertUser,showUser,updateUser,deleteUser } from '../controler/userController.js';

const router = express.Router();

router.get('/',getUser);
router.post('/',insertUser);
router.get('/:id',showUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router;