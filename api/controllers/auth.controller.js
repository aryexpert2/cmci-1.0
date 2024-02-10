import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body; // destructuration of the request body
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
   // return res.status(400).json({ message: "All fields are required" });
   // on va utiliser le middleware error.js pour gérer les erreurs
   next(errorHandler(400, "All fields are required"));
  }

  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(password, salt);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
     await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    // on va remplacer la ligne de code ci-dessus par la ligne ci-dessous
    next(error); // utilisation du middleware pour gérer les erreurs
  }

};
