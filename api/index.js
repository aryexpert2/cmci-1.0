import express from "express";

const app = express();

// nous avons fait "type": "module", dans le package.json pour corriger le soucis d'imports
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
