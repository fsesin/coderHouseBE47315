import { usersService } from "../services/users.service.js";

class UsersController {
  async findAllUsers(req, res) {
    try {
      const allUsers = await usersService.getAll();
      res.status(200).json({ message: "Users", users: allUsers });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findUserById(req, res) {
    const { idUser } = req.params;
    try {
      const user = await usersService.getById(id);
      res.status(200).json({ message: "User", user });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async createUser(req, res) {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }
    try {
      const createdUser = await usersService.create(req.body);
      res.status(200).json({ message: "User", user: createdUser });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export const usersController = new UsersController();
