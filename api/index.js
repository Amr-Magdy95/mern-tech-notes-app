require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

// middleware
app.use(require("cors")({ credentials: true, origin: true }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Tech Notes API");
});

// 404 and error handling
app.all("*", require("./middleware/404"));
app.use(require("./middleware/errorHandling"));

app.listen(PORT, console.log(`Server is running on port: ${PORT}...`));
