import express from 'express'
import { getCategory, insertCategory, updateCategory, deleteCategory, showCategory } from '../controler/categoryControler.js'

const router = express.Router();

router.get('/',getCategory);
router.post('/',insertCategory);
router.get('/:id',showCategory);
router.put('/:id',updateCategory);
router.delete('/:id',deleteCategory);

export default router;