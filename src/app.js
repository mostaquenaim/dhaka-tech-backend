const express = require("express");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

require("dotenv").config();
const app = express();
const authRoutes = require('./routes/v1/authentication');
const serviceRoutes = require('./routes/v1/services');

applyMiddleware(app);

app.use(authRoutes)
app.use(serviceRoutes)
app.get("/health", (req, res) => {
  res.send("dhaka tech is running....");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);


// const main=async ()=>{
//     await connectDB()
//     app.listen(port, () => {
//         console.log(`dhaka tech Server is running on port ${port}`);
//     });
   
// }


// main()

module.exports = app