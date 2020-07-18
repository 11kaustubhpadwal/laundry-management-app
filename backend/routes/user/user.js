const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

const User = require("../../models/User");

// @route       POST /api/users
// @desc        Register a user
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
      let userExists = await User.findOne({ email: email });

      if (userExists) {
        res.status(400).json({ msg: "User already exists." });
      }

      let referenceNumber = uuidv4();

      let user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        referenceNumber,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
);

// @route       PUT /api/users/:userID
// @desc        Edit personal information
// @access      Private
router.put(
  "/:userID",
  [
    auth,
    check("firstName", "Please enter your first name.").notEmpty(),
    check("lastName", "Please enter your last name.").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName } = req.body;

    try {
      let user = await User.findById(req.params.userID);

      if (!user) {
        res.status(400).json({ msg: "User not found." });
      }

      //   user = await User.findByIdAndUpdate(
      //     req.params.userID,
      //     { $set: { firstName: firstName, lastName: lastName } },
      //     { new: false }
      //   );

      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
