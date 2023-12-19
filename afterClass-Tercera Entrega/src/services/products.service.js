import { productsDao } from "../daos/products.dao.js";

export const createProduct = async (product) => {
  const createdProduct = await productsDao.createProduct(product);
  return createdProduct;
};
