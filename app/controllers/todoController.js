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

const addTodo = (req, res) => {
  const { title } = req.body;
  todoModel.addTodo(title, (error, todo) => {
    if (error) {
      return res.status(500).json({
        error:
          "Failed to add a new task. Looks like even the to-do list is on strike!",
      });
    }
    res.status(201).json(todo);
  });
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  todoModel.updateTodo(id, title, (error, todo) => {
    if (error) {
      return res.status(500).json({
        error:
          "Failed to update a task. It seems our to-do list hit a snag in the upgrade department",
      });
    }
    res.status(200).json(todo);
  });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel.deleteTodo(id, (error) => {
    if (error) {
      return res.status(500).json({
        error:
          "Failed to delete a task. Looks like our to-do list is feeling a bit clingy!",
      });
    }
    res.status(204).send();
  });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
