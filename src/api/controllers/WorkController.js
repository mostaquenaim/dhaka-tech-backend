const {
    addNewWork,
    getAllWorks
} = require("../../lib/services/WorkService");
const moment = require('moment-timezone');


const createNewWork = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData,"10");
        const date = userData.date
        const cdate = userData.currentDate

        const utcDate = moment.utc(date).toDate();
        const utcDateC = moment.utc(cdate).toDate();

        // Convert the UTC date to the Bangladeshi timezone ('Asia/Dhaka')
        const bdDate = moment(utcDate).tz('Asia/Dhaka').format();
        const bdDateC = moment(utcDateC).tz('Asia/Dhaka').format();

        userData.date = bdDate
        userData.currentDate = bdDateC

        const result = await addNewWork(userData);
        console.log(result);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllWork = async (req, res) => {
    try {
        console.log(req?.query,"21");
        const users = await getAllWorks(req?.query?.email);
        console.log(users,"2333");
        
        if (users) {
            res.json(users);
        } else {
            res.status(404).json({ message: "Users not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createNewWork,
    getAllWork
};
