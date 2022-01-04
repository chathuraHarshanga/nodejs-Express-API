import express from "express";

import {
  CreateUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", CreateUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
