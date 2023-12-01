require("dotenv").config();
const http = require('http')
const app = require('./src/app');
const connectDB = require("./src/db/connectDB");
const server = http.createServer(app)
const port = process.env.PORT || 5000 

const main=async ()=>{
    await connectDB()
    server.listen(port, () => {
        console.log(`dhaka tech Server is running on port ${port}`);
    });
}

main()

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const mongoose = require('mongoose');

// const router = express();
// const port = process.env.PORT || 5000;

// router.use(cors(
//     {
//         // origin: [
//         //     'http://localhost:5173',
//         // ],
//         // credentials: true
//     }
// ));

// router.use(express.json());

// mongoose.connect(process.env.MONGODB_URI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     // useFindAndModify: false
// });

// const { Schema, model } = mongoose;

// // Mongoose Schemas

// // service schema 
// const serviceSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: String,
//         required: true,
//     },
//     img: {
//         type: String,
//         required: true,
//     },
// })

// // portfolio schema 
// const portfolioSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     image: {
//         type: String,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
// });

// // people schema 
// const peopleSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     bank_account_no: {
//         type: String,
//         required: true,
//     },
//     salary: {
//         type: String,
//         required: true,
//     },
//     designation: {
//         type: String,
//         required: true,
//     },
//     role: {
//         type: String,
//         required: true,
//     },
//     isVerified: {
//         type: Boolean,
//         default: false,
//     },
//     image: {
//         type: String,
//         required: true,
//     },
// });

// // review schema 
// const reviewSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User', // Assuming your user model is named 'User'
//         required: true,
//     },
//     rating: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 5
//     },
//     comment: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// // Mongoose Models
// const ServiceModel = model('services', serviceSchema)
// const PortfolioModel = model('portfolios', portfolioSchema)
// const PeopleModel = model('peoples', peopleSchema)
// const ReviewModel = model('reviews', reviewSchema)

// // routes 
// // services 
// router.get('/services', async (req, res) => {
//     try {
//         const result = await ServiceModel.find(req?.query);
//         res.send(result);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // portfolios 
// router.get('/portfolios', async (req, res) => {
//     try {
//         const result = await PortfolioModel.find(req?.query);
//         res.send(result);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // get reviews 
// router.get('/reviews', async (req, res) => {
//     try {
//         const reviews = await ReviewModel.find();
//         console.log(reviews);
//         res.send(reviews);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // add user 
// router.post('/add-user', async (req, res) => {
//     try {
//         // Assuming req.body contains the user data from the registration form
//         const {
//             name,
//             email,
//             bank_account_no,
//             salary,
//             designation,
//             role,
//             isVerified,
//             image,
//         } = req.body;

//         // Create a new instance of the People model
//         const newUser = new PeopleModel({
//             name,
//             email,
//             bank_account_no,
//             salary,
//             designation,
//             role,
//             isVerified,
//             image,
//         });
//         console.log(newUser, "167");
//         // Save the new user to the database
//         const result = await newUser.save();

//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// router.get('/', (req, res) => {
//     res.send('dhaka tech is running');
// });

// router.listen(port, () => {
//     console.log(`dhaka tech Server is running on port ${port}`);
// });
