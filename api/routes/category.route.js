import express from "express";
import { getCategory, addCategory, deleteCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/add", addCategory);
router.delete("/:id", deleteCategory);

export default router;
