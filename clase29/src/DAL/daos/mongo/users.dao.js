import BasicMongo from "./basic.dao.js";
import { usersModel } from "../../models/users.model.js";

class UsersMongo extends BasicMongo {
  constructor() {
    super(usersModel);
  }
}

export const usersMongo = new UsersMongo();
