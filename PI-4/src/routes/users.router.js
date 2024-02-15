import { Router } from "express";
import upload from "../middlewares/multer.middleware.js";
import { saveUserDocuments } from "../controllers/users.controller.js";
const router = Router();

router.post(
  "/:id/documents",
  upload.fields([
    { name: "dni", maxCount: 1 },
    { name: "address", maxCount: 1 },
    { name: "bank", maxCount: 1 },
  ]),
  saveUserDocuments
);

export default router;
