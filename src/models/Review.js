const { model, Schema } = require("mongoose");

const reviewSchema = new Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', // Assuming your user model is named 'User'
    //     required: true,
    // },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Review= model("Review",reviewSchema)

module.exports = Review



