const { urlencoded } = require("body-parser");
const mongoose = require("mongoose");

const urlencodedParser = urlencoded({ extended: false });

// Connect Database
let mongoUrl =
  "mongodb+srv://test:test@mongocluster.xesxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUrl);

// Create a schema - like a blueprint
let todoSchema = new mongoose.Schema({
  item: String,
});

// Model (Collection)
let Todo = mongoose.model("Todo", todoSchema);

// Add Item to the collection
// let itemOne = Todo({ item: "get flowers" }).save((err) => {
//   if (err) throw err;
//   console.log("item saved");
// });

// Data
// let data = [
//   { item: "get milk" },
//   { item: "take online classes" },
//   { item: "create project" },
// ];

module.exports = function (app) {
  // Todo Logic

  app.get("/todo", function (req, res) {
    // Get Data from DB
    Todo.find({}, (err, data) => {
      if (err) throw err;

      // If fine render view
      res.render("todo", { todos: data }); // render todo and pass data
    }); // Get all items from Todo Collection
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    // Get Data from view and add it to mongoDB
    let newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err;

      // If fine render updated one
      res.json({ todos: data });
    });
  });

  app.delete("/todo/:item", (req, res) => {
    // Delete Logic
    data = data.filter(
      (todo) => todo.item.replace(/ /g, "-") !== req.params.item
    );

    res.json({ todos: data });
  });

  //
};
