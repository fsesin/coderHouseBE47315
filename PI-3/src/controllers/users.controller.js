import { saveUserDocuments as saveUserDocumentsService } from "../services/users.service.js";

export const saveUserDocuments = async (req, res) => {
  const { id } = req.params;
  console.log(req.files);
  const { dni, address, bank } = req.files;
  const response = await saveUserDocumentsService({ id, dni, address, bank });
  res.json({ response });
};
