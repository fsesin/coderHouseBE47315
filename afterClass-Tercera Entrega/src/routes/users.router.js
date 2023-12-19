import { Router } from "express";
import { createUser } from "../services/users.service.js";
const router = Router();

router.post("/", async (req, res) => {
  const user = req.body;
  const createdUser = await createUser(user);
  res.json({ createdUser });
});
export default router;
