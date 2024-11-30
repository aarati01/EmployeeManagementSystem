import employees from "../models/employeeModel.js";

export const addOrUpdateEmployee = (req, res) => {
  const { f_name, l_name, emp_id, salary, working_dep, email } = req.body;

  // Check if employee already exists
  const existingEmployee = employees.find(
    (emp) => emp.emp_id === Number(emp_id)
  );

  if (existingEmployee) {
    // Update employee details
    existingEmployee.f_name = f_name;
    existingEmployee.l_name = l_name;
    existingEmployee.salary = salary;
    existingEmployee.working_dep = working_dep;
    existingEmployee.email = email;

    res.status(200).send({
      message: "Employee updated successfully",
      employee: existingEmployee,
    });
  } else {
    // Add new employee
    const newEmployee = {
      f_name,
      l_name,
      emp_id: Number(emp_id),
      salary,
      working_dep,
      email,
    };
    employees.push(newEmployee);

    res
      .status(201)
      .send({ message: "Employee added successfully", employee: newEmployee });
  }
};
