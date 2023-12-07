const express = require("express");
const db = require("../models/todoModel");
const router = express.Router();

// show all todo
router.get("/todos", (req, res) => {
  db.getAllTodos((err, result) => {
    if (err) {
      return res.status(500).json({
        message:
          "Failed to fetch the to-do data. Looks like the to-do list is playing hide and seek!",
        error: err,
      });
    }
    res.status(200).json({
      message: "Data todo berhasil diambil.",
      data: result,
    });
  });
});

// add new todo
router.post("/todos", (req, res) => {
  const title = req.body.title;

  if (!title) {
    return res.status(400).json({
      message: "Title tidak boleh sekosong hati anda.",
    });
  }

  db.addTodo(title, (err, result) => {
    if (err) {
      return res.status(500).json({
        message:
          "Failed to add a new task. Looks like even the to-do list is on strike!",
        error: err,
      });
    }
    res.status(201).json({
      message: "Hooray! A brand new task has been added to the to-do list!",
      data: result,
    });
  });
});

// updating todo
router.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;

  if (!title) {
    return res.status(400).json({
      message: "Title tidak boleh sekosong hati anda.",
    });
  }

  db.updateTodo(id, title, (err, result) => {
    if (err) {
      return res.status(500).json({
        message:
          "Failed to update a task. It seems our to-do list hit a snag in the upgrade department",
        error: err,
      });
    }
    if (result) {
      res.status(200).json({
        message:
          "Task updated successfully! Our to-do list just got a makeover.",
        data: result,
      });
    } else {
      res.status(404).json({
        message: "Todo not found",
      });
    }
  });
});

// deleting todo
router.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  db.deleteTodo(id, (err) => {
    if (err) {
      return res.status(500).json({
        message:
          "Failed to delete a task. Looks like our to-do list is feeling a bit clingy!",
        error: err,
      });
    }
    res.status(204).send();
  });
});

module.exports = router;
