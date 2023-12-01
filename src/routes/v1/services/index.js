const findAll = require('../../../api/controllers/findAll')
const findAllReview = require('../../../api/controllers/ReviewController')
const findAllPortfolio = require('../../../api/controllers/PortfolioController')
const {
    createNewWork,
    getAllWork
} = require('../../../api/controllers/WorkController')
const {
    createNewUser,
    getUserByEmailController,
    getAllEmployee,
    updateUser,
    fireUser
} = require('../../../api/controllers/PeopleController')
const {
    addPayment,
    makePayments,
    getPaymentByEmail
} = require('../../../api/controllers/PaymentController')
const verifyToken = require('../../../middlewares/verifyToken')


const router = require('express').Router()

 
router.get('/services', findAll) 
router.get('/reviews', findAllReview)
router.get('/portfolios', findAllPortfolio)
router.get('/get-all-employees', getAllEmployee)
router.get('/get-all-works', getAllWork)
router.patch('/update-employee/:email', updateUser)
router.patch('/fire-employee/:email', fireUser)
router.get('/get-user/:email', getUserByEmailController)
router.get('/get-user-payment/:email', getPaymentByEmail)
router.post('/add-user', createNewUser)
router.post('/add-work', createNewWork)
router.post('/make-payment', makePayments)
router.post('/create-payment-intent', addPayment)
// router.post('/logout',logout) 

module.exports = router