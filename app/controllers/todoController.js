const todoModel = require("../models/todoModel");

const getTodos = (req, res) => {
  todoModel.getAllTodos((error, todos) => {
    if (error) {
      return res.status(500).json({
        error:
          "Failed to fetch the to-do data. Looks like the to-do list is playing hide and seek!",
      });
    }
    res.status(200).json(todos);
  });
};

module.exports = {
  getTodos,
};
