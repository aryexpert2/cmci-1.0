import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(
    process.env.MONGO // on utilise la variable d'environnement MONGO pour la connexion à la base de données
  )
  .then(() => {
    console.log("Connected to database successfully");
  }).catch((error) => {
    console.log(error);
  });

const app = express();

// nous avons fait "type": "module", dans le package.json pour corriger le soucis d'imports
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.use("/api/user", userRoutes);