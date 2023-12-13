import BasicMongo from "./basic.dao.js";
import { productsModel } from "../../models/products.model.js";

class ProductsMongo extends BasicMongo {
  constructor() {
    super(productsModel);
  }
}

export const productsMongo = new ProductsMongo();
