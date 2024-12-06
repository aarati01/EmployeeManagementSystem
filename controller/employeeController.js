import Employee from "../model/employeeModel.js"; // Import your Mongoose model

export const addOrUpdateEmployee = async (req, res) => {
  const { f_name, l_name, emp_id, salary, working_dep, email } = req.body;

  try {
    // Check if the employee already exists by emp_id
    const existingEmployee = await Employee.findOne({ emp_id: Number(emp_id) });

    if (existingEmployee) {
      // If employee exists, update their details
      existingEmployee.f_name = f_name;
      existingEmployee.l_name = l_name;
      existingEmployee.salary = salary;
      existingEmployee.working_dep = working_dep;
      existingEmployee.email = email;

      // Save the updated employee information
      await existingEmployee.save();

      res.status(200).send({
        message: "Employee updated successfully",
        employee: existingEmployee,
      });
    } else {
      // If employee does not exist, create a new employee
      const newEmployee = new Employee({
        f_name,
        l_name,
        emp_id: Number(emp_id),
        salary,
        working_dep,
        email,
      });

      // Save the new employee
      await newEmployee.save();

      res.status(201).send({
        message: "Employee added successfully",
        employee: newEmployee,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error processing request",
      error: err.message,
    });
  }
};
