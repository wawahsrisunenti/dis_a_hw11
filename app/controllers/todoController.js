const todoModel = require("../models/todoModel");

const getTodos = (req, res) => {
  todoModel.getAllTodos((error, todos) => {
    if (error) {
      return res.status(500).json({
        error:
          "Failed to fetch the to-do data. Looks like the to-do list is playing hide and seek!",
      });
    }
    res.status(200).json({
      message: "Successfully snagged the to-do data!",
      data: todos,
    });
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
    res.status(201).json({
      message: "Hooray! A brand new task has been added to the to-do list!",
      data: todo,
    });
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
    res.status(200).json({
      message: "Task updated successfully! Our to-do list just got a makeover.",
      data: todo,
    });
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
    res.status(204).json({
      message:
        "Task successfully evicted! Our to-do list is shedding some weight!",
    });
  });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
