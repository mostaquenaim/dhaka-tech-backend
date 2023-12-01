const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    bank_account_no: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isFired: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        required: true,
    },
});


const User= model("User",UserSchema)

module.exports = User