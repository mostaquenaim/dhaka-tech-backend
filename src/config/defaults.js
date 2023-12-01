
require("dotenv").config();
// console.log(process.env.LOCAL_CLIENT, process.env.CLIENT, "333");
const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  CLIENT: process.env.CLIENT,
};

module.exports = Object.freeze(config);
