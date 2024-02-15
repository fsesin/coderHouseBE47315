export default class LoginError extends Error {
  constructor() {
    super("Invalidad email or password");
    this.name = "LoginError";
  }
}
