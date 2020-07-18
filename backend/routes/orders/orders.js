const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

const Order = require("../../models/Order");

// @route       GET /api/orders
// @desc        Get list of orders
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ referenceNumber: req.user.id });
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
});

// @route       POST /api/orders
// @desc        Place new order
// @access      Private
router.post(
  "/",
  [
    auth,
    check("firstName", "Please enter your first name.").notEmpty(),
    check("lastName", "Please enter your last name.").notEmpty(),
    check("service", "Please select a service.").notEmpty(),
    check("pickupDate", "Please select a date for pickup.").notEmpty(),
    check("pickupTime", "Please select a time for pickup.").notEmpty(),
    check(
      "address",
      "Please enter your address for pickup and delivery."
    ).notEmpty(),
    check("paymentMethod", "Please select a payment method.").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      service,
      optionalService,
      quantity,
      numberOfClothes,
      pickupDate,
      pickupTime,
      address,
      paymentMethod,
      totalAmount,
    } = req.body;

    try {
      let uuid = uuidv4();

      let trimmed = uuid.slice(0, 7);
      let orderNumber = trimmed.toUpperCase();

      let referenceNumber = req.user.id;

      let order = new Order({
        orderNumber,
        referenceNumber,
        firstName,
        lastName,
        service,
        optionalService,
        quantity,
        numberOfClothes,
        pickupDate,
        pickupTime,
        address,
        paymentMethod,
        totalAmount,
      });

      await order.save();

      res.json({ order, msg: "Order placed successfully." });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
