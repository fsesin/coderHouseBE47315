import { Router } from "express";
import { usersController } from "../controllers/users.controller.js";
const router = Router();

router.get("/", usersController.findAllUsers);
router.get("/:idUser", usersController.findUserById);
router.post("/", usersController.createUser);
export default router;
