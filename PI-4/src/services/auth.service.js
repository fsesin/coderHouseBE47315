import { usersDao } from "../daos/users.dao.js";
import {
  hashData,
  compareData,
  generateToken,
  transporter,
} from "../utils/index.js";
import LoginError from "./errors/login.error.js";
import UserAlreadyExistsError from "./errors/user-already-exists.error.js";
export const login = async (userInfo) => {
  const { email, password } = userInfo;
  const user = await usersDao.getByEmail(email);
  if (!user) {
    throw new LoginError();
  }
  const isPassword = await compareData(password, user.password);
  if (!isPassword) {
    throw new LoginError();
  }
  const token = generateToken({
    email: user.email,
    role: user.role,
  });

  return { token, user };
};

export const signup = async (userInfo) => {
  const { email, password } = userInfo;
  const user = await usersDao.getByEmail(email);
  if (user) {
    throw new UserAlreadyExistsError(email);
  }
  const hashedPassword = await hashData(password);
  const newUser = await usersDao.createOne({
    ...userInfo,
    password: hashedPassword,
  });

  const token = generateToken({
    email: newUser.email,
    role: newUser.role,
  });

  await transporter.sendMail({
    from: "faridsesin@gmail.com",
    to: newUser.email,
    subject: "Welcome to our flatform",
    html: `<b>Welcome to our platform HTML ${token}</b>`,
  });

  return { token, user: newUser };
};
