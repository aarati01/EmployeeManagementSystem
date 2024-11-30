import mongoose from "mongoose";
const { Schema } = mongoose;
const employeeeSchema = new Schema({
  f_name: String,
  l_name: String,
  emp_id: Number,
  salary: Number,
  working_dep: String,
  email: String,
});
