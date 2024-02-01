import express from "express";
import {
  deleteUser,
  getUsers,
  signOut,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.post("/signout", signOut);
router.get("/getusers", verifyToken, getUsers);

export default router;
