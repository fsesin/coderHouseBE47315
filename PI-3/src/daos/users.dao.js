import { usersModel } from "../models/users.model.js";
import BasicDao from "./basic.dao.js";

class UsersDao extends BasicDao {
  constructor() {
    super(usersModel, ["courses"]);
  }
  async getByEmail(email) {
    const response = await usersModel.findOne({ email });
    return response;
  }
}

export const usersDao = new UsersDao();
