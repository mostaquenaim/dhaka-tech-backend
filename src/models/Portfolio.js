const { model, Schema } = require("mongoose");

const portfolioSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});


const Portfolio= model("portfolios",portfolioSchema)

module.exports = Portfolio



