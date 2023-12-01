// models/payment.js

const { model, Schema } = require("mongoose");

const payInfoSchema = new Schema({
  employee: {
    type: Object,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  paid_at: {
    type: Date,
    default: Date.now,
  },
});

const PayInfo = model('PayInfo', payInfoSchema);

module.exports = PayInfo;
