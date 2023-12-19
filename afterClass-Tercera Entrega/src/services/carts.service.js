import { cartsDao } from "../daos/carts.dao.js";
import { ticketsDao } from "../daos/tickets.dao.js";
import { v4 as uuidv4 } from "uuid";
export const addProductToCart = async (idCart, idProduct) => {
  const response = await cartsDao.addProductToCart(idCart, idProduct);
  return response;
};

export const getCart = async (idCart) => {
  const cart = await cartsDao.getCart(idCart);
  return cart;
};

export const purchase = async (idCart) => {
  // suficiente stock => restarlo del stock *
  // stock insuficiente => no agregar el prod a la compra final
  // generar un ticket
  // devolver arreglo prod si compra no exitosa
  // carrito debe tener al final solo productos que no se compraron
  const cart = await cartsDao.getCart(idCart);
  const products = cart.products;
  let availableProducts = [];
  let unavailableProducts = [];
  let totalAmount = 0;
  for (let item of products) {
    if (item.product.stock >= item.quantity) {
      // disponible
      availableProducts.push(item);
      item.product.stock -= item.quantity;
      await item.product.save();
      totalAmount += item.quantity * item.product.price;
    } else {
      //no disponible
      unavailableProducts.push(item);
    }
  }

  cart.products = unavailableProducts;
  await cart.save();
  if (availableProducts.length) {
    const ticket = {
      code: uuidv4(),
      purchase_datetime: new Date(),
      amount: totalAmount,
      purchaser: "jhoyos@mail.com",
    };
    await ticketsDao.createTicket(ticket);
    return { availableProducts, totalAmount };
  }
  return { unavailableProducts };
};
