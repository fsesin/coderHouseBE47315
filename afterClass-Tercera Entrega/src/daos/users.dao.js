import { usersModel } from "../models/users.model.js";

class UsersDao {
  async createUser(user) {
    const response = await usersModel.create(user);
    return response;
  }
}

export const usersDao = new UsersDao();
