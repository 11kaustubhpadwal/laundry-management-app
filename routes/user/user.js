const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

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
      res
        .status(400)
        .json({ msg: "Failed to create a new account. Please try again." });
    }
  }
);

// @route       PATCH /api/users
// @desc        Edit personal information
// @access      Private
router.patch(
  "/",
  [
    auth,
    [
      check("firstName", "Please enter your first name.").notEmpty(),
      check("lastName", "Please enter your last name.").notEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName } = req.body;

    try {
      let user = await User.findById(req.user.id);

      if (!user) {
        res.status(400).json({ msg: "User not found." });
      } else {
        user = await User.findByIdAndUpdate(
          req.user.id,
          { $set: { firstName: firstName, lastName: lastName } },
          { new: true }
        ).select("-password");

        res.json(user);
      }
    } catch (error) {
      res
        .status(400)
        .json({ msg: "Failed to update the profile. Please try again." });
    }
  }
);

// @route       POST /api/users/forgot-password
// @desc        Send password reset link
// @access      Public
router.post(
  "/forgot-password",
  check("email", "Please enter a valid email address.").isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let email = req.body.email;

      let user = await User.findOne({ email: email });

      if (!user) {
        res.status(400).json({ msg: "User not found." });
      } else {
        const token = crypto.randomBytes(20).toString("hex");

        user = await User.findOneAndUpdate(
          { email: email },
          {
            $set: {
              resetPasswordToken: token,
              resetPasswordExpires: Date.now() + 3600000,
            },
          }
        );

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        const mailOptions = {
          from: "getlaundered@gmail.com",
          to: user.email,
          subject: "Link to Reset Password",
          text:
            "You are  receiving this email because you (or someone else) have requested to reset the password of your account.\n\n" +
            "Please click on the following link to complete the process within one hour of the reception of this email : \n\n" +
            "https://vast-temple-80916.herokuapp.com/" +
            token +
            "\n\n" +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n",
        };

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            res
              .status(400)
              .json({ msg: "Failed to send the password reset link.", err });
          } else {
            res.json({
              msg: "Password rest link sent. Please check your inbox.",
            });
          }
        });
      }
    } catch (error) {
      res.status(400).json({ msg: "Failed to send the password reset link." });
    }
  }
);

// @route       GET /api/users/forgot-password/:token
// @desc        Verify password reset link
// @access      Public
router.get("/forgot-password/:token", async (req, res) => {
  try {
    let user = await User.findOne({
      resetPasswordToken: req.params.token.toString(),
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (user === null) {
      res.status(400).json({ msg: "The link has been expired." });
    } else {
      res.json({ msg: "Password reset link is valid." });
    }
  } catch (error) {
    res.status(400).json({ msg: "The link is invalid." });
  }
});

// @route       PATCH /api/users/update-password/:token
// @desc        Update password
// @access      Public
router.patch("/update-password/:token", async (req, res) => {
  let { password } = req.body;

  try {
    let user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    const salt = await bcrypt.genSalt(10);

    password = await bcrypt.hash(password, salt);

    if (!user) {
      res.status(400).json({
        msg: "User not found. Please get another link and try again.",
      });
    } else {
      user = await User.findOneAndUpdate(
        { resetPasswordToken: req.params.token },
        { $set: { password: password, resetPasswordToken: null } },
        { new: true }
      );

      res.json({
        msg: "Password changed successfully.",
      });
    }
  } catch (error) {
    res.status(400).json({
      msg:
        "Failed to update the password. Please get another link and try again.",
    });
  }
});

module.exports = router;
