import { existsSync, promises } from "fs";
import { createHash } from "crypto";
const path = "UsersFile.json";

class UsersManager {
  async getUsers() {
    try {
      if (existsSync(path)) {
        const usersFile = await promises.readFile(path, "utf-8");
        return JSON.parse(usersFile);
      } else {
        return [];
      }
    } catch (error) {
      return error;
    }
  }

  async createUser(user) {
    try {
      const users = await this.getUsers();
      let id;
      if (!users.length) {
        id = 1;
      } else {
        id = users[users.length - 1].id + 1;
      }
      const hashPassword = createHash("sha512")
        .update(user.password)
        .digest("hex");
      users.push({ id, ...user, password: hashPassword });
      await promises.writeFile(path, JSON.stringify(users));
    } catch (error) {
      return error;
    }
  }

  async getUserById(id) {
    try {
      const users = await this.getUsers();
      const user = users.find((u) => u.id === id);
      if (!user) {
        return "No user";
      } else {
        return user;
      }
    } catch (error) {
      return error;
    }
  }

  async deleteUser(id) {
    try {
      const users = await this.getUsers();
      const newArrayUsers = users.filter((u) => u.id !== id);
      await promises.writeFile(path, JSON.stringify(newArrayUsers));
    } catch (error) {
      return error;
    }
  }
}

// PROBANDO LOS METODOS

const user1 = {
  first_name: "Juan",
  last_name: "Hoyos",
  age: 40,
  course: "JAVASCRIPT",
  password: "12345",
};

const user2 = {
  first_name: "Luis",
  last_name: "Abello",
  age: 35,
  course: "BACKEND",
  password: "abcde",
};
async function test() {
  const manager = new UsersManager();
  await manager.createUser(user2);
  //const users = await manager.getUsers()
  //console.log(users);
  //await manager.deleteUser(1)
}

test();
