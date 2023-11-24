const express = require("express");
const db = require("./dbConfig"); // import configuration database

const router = express.Router();

// Endpoint for get list todo
router.get("/todos", (req, res) => {
  db.query("SELECT * FROM todo", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

module.exports = router;
