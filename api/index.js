import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

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
app.use(express.json()); // coe il n'est pas permis d'envoyer des données en format json au server,
                         // on utilise cette méthode pour permettre au server de les lire

// nous avons fait "type": "module", dans le package.json pour corriger le soucis d'imports
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// création d'un middleware pour gérer les erreurs dans les requêtes
// next permet de passer à l'erreur suivante dans la pile d'erreur si il y en a  plusieurs
app.use((err, req, res, next) => { 
  const statusCode =  err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ 
    success: false,
    statusCode,
    message,
  });
});    