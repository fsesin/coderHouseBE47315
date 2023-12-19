import { Router } from "express";
import { createProduct } from "../services/products.service.js";
const router = Router();

router.post("/", async (req, res) => {
  const product = req.body;
  const createdProduct = await createProduct(product);
  res.json({ createdProduct });
});

export default router;
