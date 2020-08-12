const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");

const Order = require("../../models/Order");

// @route       GET /api/employees/orders
// @desc        Get list of orders
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to get a list of orders. Please try again." });
  }
});

// @route       PATCH /api/employees/orders/:orderID
// @desc        Cancel an order
// @access      Private
router.patch("/:orderID", auth, async (req, res) => {
  try {
    let order = await Order.findById(req.params.orderID);

    if (!order) {
      res.status(400).json({ msg: "Order not found." });
    } else {
      order = await Order.findByIdAndUpdate(
        req.params.orderID,
        { $set: { orderStatus: "Cancelled" } },
        { new: true }
      );

      res.json({ msg: "The order has been cancelled successfully." });
    }
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to cancel the order. Please try again." });
  }
});

// @route       PATCH /api/employees/orders/complete/:orderID
// @desc        Complete an order
// @access      Private
router.patch("/complete/:orderID", auth, async (req, res) => {
  try {
    let order = await Order.findById(req.params.orderID);

    if (!order) {
      res.status(400).json({ msg: "Order not found." });
    } else {
      order = await Order.findByIdAndUpdate(
        req.params.orderID,
        { $set: { orderStatus: "Completed" } },
        { new: true }
      );

      res.json({ msg: "The order has been completed successfully." });
    }
  } catch (error) {
    res
      .status(400)
      .json({ msg: "Failed to complete the order. Please try again." });
  }
});

module.exports = router;
