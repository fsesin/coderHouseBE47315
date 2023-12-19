import { productsModel } from "../models/products.model.js";

class ProductsDao {
  async createProduct(product) {
    const response = await productsModel.create(product);
    return response;
  }
}

export const productsDao = new ProductsDao();
