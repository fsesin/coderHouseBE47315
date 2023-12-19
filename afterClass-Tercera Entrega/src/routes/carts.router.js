import { Router } from "express";
import {
  addProductToCart,
  purchase,
  getCart,
} from "../services/carts.service.js";
import { get } from "mongoose";
const router = Router();

router.get("/:idCart", async (req, res) => {
  const { idCart } = req.params;
  const response = await getCart(idCart);
  res.json({ response });
});

router.get("/:idCart/products/:idProduct", async (req, res) => {
  const { idCart, idProduct } = req.params;
  const response = await addProductToCart(idCart, idProduct);
  res.json({ response });
});

router.get("/:idCart/purchase", async (req, res) => {
  const { idCart } = req.params;
  const response = await purchase(idCart);
  res.json({ response });
});
export default router;
