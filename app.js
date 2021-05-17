const express = require("express");

const todoController = require("./controllers/todoController");

const app = express();

// Set Template Engine
app.set("view engine", "ejs");

// Static files
app.use(express.static("./public"));

// Fire Controllers
todoController(app);

// Listen to port
app.listen(3000);
console.log("App listening to port 3000");
