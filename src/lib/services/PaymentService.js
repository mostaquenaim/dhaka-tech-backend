const PayInfo = require("../../models/PayInfo");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPayment = async (price) => {
    try {
        const amount = parseInt(price * 100);
        console.log(amount, 'amount inside the intent')

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card']
        });

        // res.send(
            return {
            clientSecret: paymentIntent.client_secret
        }
        // )
    } catch (error) {
        // Handle errors
        console.error("Error adding new user:", error);
        throw error;
    }
};

const makePayment = async (payment) => {
    try {
        const paymentResult = await PayInfo.create(payment);

        return paymentResult;
    } catch (error) {
        // Handle errors
        console.error("Error making payment:", error);
        throw error;
    }

}

const getUserPaymentByEmail = async (email) => {
    try {
      const payments = await PayInfo.find({ 'employee.email': email }).sort({
        year: 1, // Ascending order
        month: 1, // Ascending order
      });
  
      return payments;
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      throw error;
    }
  };
  




module.exports = {
    createPayment,
    makePayment,
    getUserPaymentByEmail
};

