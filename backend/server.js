require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ConnectDB = require("./config/db");
const userRoutes = require("./routes/user");

// middleware
app.use(bodyParser.json());

//Routes
app.use("/user" , userRoutes);

ConnectDB();

const port = 5000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
