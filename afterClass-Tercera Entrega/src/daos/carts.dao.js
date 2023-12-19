import { cartsModel } from "../models/carts.model.js";

class CartsDao {
  async getCart(idCart) {
    const cart = await cartsModel.findById(idCart).populate("products.product");
    return cart;
  }
  async createCart() {
    console.log("probando");
    const cart = await cartsModel.create();
    return cart;
  }

  async addProductToCart(idCart, idProduct) {
    const cart = await cartsModel.findById(idCart);
    const productIndex = cart.products.findIndex((p) =>
      p.product.equals(idProduct)
    );
    if (productIndex === -1) {
      cart.products.push({ product: idProduct, quantity: 1 });
    } else {
      cart.products[productIndex].quantity++;
    }
    return cart.save();
  }
}

export const cartsDao = new CartsDao();
