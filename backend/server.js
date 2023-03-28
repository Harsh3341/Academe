require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1", require("./routes/userRoute"));
app.use("/api/v1", require("./routes/assignmentRoute"));
app.use("/api/v1", require("./routes/ideasRoute"));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`.green.underline.bold)
);
