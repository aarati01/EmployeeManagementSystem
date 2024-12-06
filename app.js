import express from "express";
import bodyParser from "body-parser";
import { addorUpdateEmployee } from "./controller/employeeController.js";
const app = express();
const Port = 3000;
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Serve HTML form (View)
app.use("nothing");
app.use(express.static("views"));

//Routes (controller)
app.post("/employee", addorUpdateEmployee);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
