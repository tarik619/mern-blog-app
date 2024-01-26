import express from "express";
import { newUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", newUser);

export default router;
