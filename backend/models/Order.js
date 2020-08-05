const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  referenceNumber: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "In progress",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  optionalService: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  numberOfClothes: {
    type: Number,
  },
  pickupDate: {
    type: String,
    required: true,
  },
  pickupTime: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  placedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("order", OrderSchema);
