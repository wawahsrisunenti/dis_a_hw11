const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

// Route for get list to-do
router.get("/todos", todoController.getTodos);

module.exports = router;
