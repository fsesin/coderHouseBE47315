import { Router } from "express";

const router = Router();

router.get("/documents", (req, res) => {
  res.render("documents");
});

export default router;
