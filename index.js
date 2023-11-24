const express = require("express");
const todoRoutes = require("./todoRoutes");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
