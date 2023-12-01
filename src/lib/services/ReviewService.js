const Review = require("../../models/Review");

const findAllReviews = async () => {

    const cursor =await Review.find()
    // .sort(options.sort);

    return cursor
}

module.exports =findAllReviews