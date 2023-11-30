class ToysManager {
  constrcutor() {
    this.toys = [];
  }

  getAll() {
    return this.toys;
  }

  getById(id) {
    const toy = this.toys.find((t) => t.id === id);
    return toy;
  }

  createOne(obj) {
    const id = this.toys.length ? this.toys[this.toys.length - 1].id + 1 : 1;
    const newToy = { id, ...obj };
    this.toys.push(newToy);
    return newToy;
  }
}

export const toysManager = new ToysManager();
