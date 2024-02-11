import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
   return next(errorHandler(400, "All fields are required"));
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

// ********************************************
//********************************************* 

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }

  // gestion du token avec jwt(java web token)
  try {
    const validUser = await User.findOne({ email })

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, "Invalid password"));
    }

    //{expiresIn: "1h"}); // on peut ajouter cette option pour définir la durée de validité du token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); 

    //on peut afficher le tocken sans le password à la place de ._doc on peut utiliser .toObject()
    const { password: pass, ...rest } = validUser._doc;
    
    // httponly: true permet de rendre le token inaccessible en javascript
    res.status(200).cookie("access_token", token, {httpOnly: true}).json(rest);

  } catch (error) {
    next(error);
  }

};

