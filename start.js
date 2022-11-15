// Global ENV variables
require("dotenv").config();
const URL = process.env.DATABASE_URL;

// Import dependencies modules.
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// Import project files
const routes = require("./routes/routes");

// db connection
mongoose.connect(URL);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Database Connected");
});
// -----------------------------------
// Server behavior
const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
// -----------------------------------
