const findAllPortfolios = require("../../lib/services/PortfolioService");

const findAllPortfolio= async (req, res) => {
    const filter = req?.query;
    
    const allReviews= await findAllPortfolios(filter)
    res.send(allReviews);
}

module.exports = findAllPortfolio
