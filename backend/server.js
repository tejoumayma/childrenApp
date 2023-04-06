const { errorHandler } = require("./middleware/errorMiddlewar");
const colors = require("colors");
const connectDB = require("./config/db");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/admin", require("./routes/contentRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));