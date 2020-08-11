const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  employeeID: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "Employee",
  },
});

module.exports = mongoose.model("employee", EmployeeSchema);
