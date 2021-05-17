// Data
let data = [
  { item: "get milk" },
  { item: "take online classes" },
  { item: "create project" },
];

module.exports = function (app) {
  // Todo Logic

  app.get("/todo", (req, res) => {
    // Get logic
    res.render("todo", { todos: data }); // render todo and pass data
  });

  app.get("/todo", (req, res) => {
    // Post Logic
  });

  app.delete("/todo", (req, res) => {
    // Delete Logic
  });

  //
};
