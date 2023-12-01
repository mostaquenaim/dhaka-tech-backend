const Portfolio = require("../../models/Portfolio");

const findAllPortfolios = async () => {

    const cursor =await Portfolio.find()
    // .sort(options.sort);

    return cursor
}

module.exports =findAllPortfolios