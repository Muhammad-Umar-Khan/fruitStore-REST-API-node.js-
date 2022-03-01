import express from "express";
import { getFruits, createFruit, getFruit, deleteFruit, updateFruit } from "../controllers/fruits.js";
const router = express.Router();



router.get('/', getFruits);

router.post('/', createFruit);

router.get('/:id', getFruit)

router.delete('/:id', deleteFruit)

router.patch('/:id', updateFruit)

export default router;