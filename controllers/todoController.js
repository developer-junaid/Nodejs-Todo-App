module.exports = function (app) {
  // Todo Logic

  app.get("/todo", (req, res) => {
    // Get logic
    res.render("todo"); // render todo
  });

  app.get("/todo", (req, res) => {
    // Post Logic
  });

  app.delete("/todo", (req, res) => {
    // Delete Logic
  });

  //
};
