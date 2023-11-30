import { Router } from "express";
import {
  findUsers,
  findUserById,
  createUser,
} from "../controllers/users.controller.js";
const router = Router();

router.get("/", findUsers);
router.get("/:idUser", findUserById);
router.post("/", createUser);

export default router;
