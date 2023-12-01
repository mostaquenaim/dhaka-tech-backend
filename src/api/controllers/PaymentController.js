const {
    createPayment,
    makePayment,
    getUserPaymentByEmail
} = require("../../lib/services/PaymentService");


const addPayment = async (req, res) => {
    try {
        const { price } = req.body;
        const result = await createPayment(price);
        console.log(result);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const makePayments = async (req, res) => {
    try {
        const payment = req.body;
        const result = await makePayment(payment);
        console.log(result);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPaymentByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await getUserPaymentByEmail(email);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addPayment,
    makePayments,
    getPaymentByEmail
};
