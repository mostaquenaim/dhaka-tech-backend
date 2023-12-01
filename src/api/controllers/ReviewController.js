const findAllReviews = require("../../lib/services/ReviewService");

const findAllReview= async (req, res) => {
    const filter = req?.query;
    
    const allReviews= await findAllReviews(filter)
    res.send(allReviews);
}

module.exports = findAllReview
