import { usersDao } from "../daos/users.dao.js";

export const saveUserDocuments = async ({ id, dni, address, bank }) => {
  const savedDocuments = await usersDao.updateOne(id, {
    documents: [
      {
        name: "dni",
        reference: dni[0].path,
      },
      {
        name: "address",
        reference: address[0].path,
      },
      {
        name: "bank",
        reference: bank[0].path,
      },
    ],
  });
  return savedDocuments;
};
