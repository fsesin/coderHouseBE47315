import { usersManager } from "../daos/users.dao.js";
import { hashData } from "../utils.js";

export const findAll = () => {
  const users = usersManager.getAll();
  return users;
};

export const findById = (id) => {
  const user = usersManager.getById(id);
  return user;
};

export const createOne = (obj) => {
  const hashedPassword = hashData(obj.password);
  const newObj = { ...obj, password: hashedPassword };
  const createdUser = usersManager.createOne(newObj);
  return createdUser;
};

// name - email - password
