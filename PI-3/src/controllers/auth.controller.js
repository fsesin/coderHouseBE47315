import {
  login as loginService,
  signup as signupService,
} from "../services/auth.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Missing credentials" });
  }
  try {
    const { token, user } = await loginService(req.body);
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ user });
  } catch (error) {
    if (error.name === "LoginError") {
      res.status(401).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    res.status(400).json({ message: "Missing credentials" });
  }
  try {
    const { token, user } = await signupService(req.body);
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ user });
  } catch (error) {
    if (error.name === "UserAlreadyExistsError") {
      res.status(401).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
