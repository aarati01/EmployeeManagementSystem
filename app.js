import express from "express";
import bodyParser from "body-parser";
import { addOrUpdateEmployee } from "./controller/employeeController.js"; // Fixed the import
import mongoose from "mongoose";
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set up EJS as the view engine
app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));

// Set static folder
// app.use(express.static(path.join(__dirname, "views")));
// Connection to database
mongoose.connect("mongodb://127.0.0.1:27017/employees", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", function () {
  console.log("We are connected..");
});

app.get("/", (req, res) => {
  res.render("employee");
});
// Serve HTML form (View)
app.use(express.static("views"));

// Routes (controller)
app.post("/employee", addOrUpdateEmployee); // Add or update employee route

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
