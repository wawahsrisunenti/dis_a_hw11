const express = require("express");
const todoRoutes = require("./app/routes/todoRoutes");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/todoRoutes", todoRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
