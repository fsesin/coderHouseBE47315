import { Router } from "express";
import { usersManager } from "../managers/usersManager.js";
import { jwtValidation } from "../middlewares/jwt.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import passport from "passport";
const router = Router();

router.get(
  "/:idUser",
  //jwtValidation,
  passport.authenticate("jwt", { session: false }),
  authMiddleware(["PUBLIC"]),
  async (req, res) => {
    console.log("Passport jwt");
    const { idUser } = req.params;
    const user = await usersManager.findById(idUser);
    res.json({ message: "User", user });
  }
);

export default router;
