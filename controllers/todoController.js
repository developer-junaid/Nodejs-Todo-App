const { urlencoded } = require("body-parser");

const urlencodedParser = urlencoded({ extended: false });

// Data
let data = [
  { item: "get milk" },
  { item: "take online classes" },
  { item: "create project" },
];

module.exports = function (app) {
  // Todo Logic

  app.get("/todo", function (req, res) {
    // Get logic
    res.render("todo", { todos: data }); // render todo and pass data
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    // Post Logic
    data.push(req.body);
    res.json({ todos: data });
  });

  app.delete("/todo", (req, res) => {
    // Delete Logic
  });

  //
};
