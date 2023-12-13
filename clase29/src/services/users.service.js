import { usersMongo } from "../DAL/daos/mongo/users.dao.js";
import UsersRequestDto from "../DAL/dtos/users-request.dto.js";
import UsersResponseDto from "../DAL/dtos/users-response.dto.js";
import { hashData } from "../utils.js";
class UsersService {
  async getAll() {
    return usersMongo.getAll();
  }

  async getById(id) {
    const user = await usersMongo.getById(id);
    const userDTO = new UsersResponseDto(user);
    return userDTO;
  }

  async create(user) {
    const hashPassword = await hashData(user.password);
    const userDto = new UsersRequestDto({ ...user, password: hashPassword });
    const createdUser = await usersMongo.createOne(userDto);
    return createdUser;
  }

  async delete(id) {
    return usersMongo.deleteOne(id);
  }
}

export const usersService = new UsersService();
