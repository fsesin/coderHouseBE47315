import { usersDao } from "../daos/users.dao.js";
import { cartsModel } from "../models/carts.model.js";
export const createUser = async (user) => {
  //const createdCart = await cartsDao.createCart();
  const createdCart = new cartsModel();
  await createdCart.save();
  const createdUser = await usersDao.createUser({
    ...user,
    cart: createdCart._id,
  });
  return createdUser;
};
