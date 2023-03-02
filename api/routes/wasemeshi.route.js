import express from "express";
import { getWasemeshies, createWasemeshi, deleteWasemeshi } from "../controllers/wasemeshi.controller.js";

const router = express.Router();

router.get("/", getWasemeshies);
router.post("/create", createWasemeshi);
router.delete("/:id", deleteWasemeshi);

export default router;
