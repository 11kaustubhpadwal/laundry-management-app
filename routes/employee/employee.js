const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

const Employee = require("../../models/Employee");

// @route       POST /api/employees
// @desc        Register a new employee
// @access      Public
router.post(
  "/",
  [
    check("firstName", "Please enter your first name.").notEmpty(),
    check("lastName", "Please enter your last name.").notEmpty(),
    check("email", "Please enter a valid email address.").isEmail(),
    check(
      "password",
      "Please enter a password with at least 8 characters."
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      let employeeExists = await Employee.findOne({ email: email });

      if (employeeExists) {
        res.status(400).json({ msg: "Employee already exists." });
      } else {
        let uuid = uuidv4();

        let trimmed = uuid.slice(0, 10);
        let employeeID = trimmed.toUpperCase();

        let employee = new Employee({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          employeeID: employeeID,
        });

        const salt = await bcrypt.genSalt(10);

        employee.password = await bcrypt.hash(password, salt);

        await employee.save();

        res.json({ employee });
      }
    } catch (error) {
      res
        .status(400)
        .json({ msg: "Failed to add the employee. Please try again." });
    }
  }
);

module.exports = router;
