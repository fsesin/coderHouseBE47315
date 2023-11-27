import { usersModel } from "../db/models/users.model.js";
import BasicManager from "./basic.manager.js";

class UsersManager extends BasicManager {
  constructor() {
    super(usersModel, ["courses"]);
  }
  async getByEmail(email) {
    const response = await usersModel.findOne({ email });
    return response;
  }
}

export const usersManager = new UsersManager();
