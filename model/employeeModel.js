import mongoose from "mongoose";
const { Schema } = mongoose;

// Rename the array to avoid conflict
let employeeData = [];

const employeeeSchema = new Schema(
  {
    f_name: String,
    l_name: String,
    emp_id: Number,
    salary: Number,
    working_dep: String,
    email: String,
  },
  { timestamps: true }
);

// Use `employee` for the model
const employee = mongoose.model("Employee", employeeeSchema);

export default employee;
