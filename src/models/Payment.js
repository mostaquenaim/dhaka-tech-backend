// models/payment.js

const { model, Schema } = require("mongoose");

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  clientSecret: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = model('Payment', paymentSchema);

module.exports = Payment;
