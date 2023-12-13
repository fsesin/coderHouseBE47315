import BasicMongo from "./basic.dao.js";
import { ordersModel } from "../../models/orders.model.js";

class OrdersMongo extends BasicMongo {
  constructor() {
    super(ordersModel);
  }
}

export const ordersMongo = new OrdersMongo();
