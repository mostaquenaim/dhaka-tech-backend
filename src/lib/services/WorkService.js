const Work = require("../../models/Works");

const addNewWork = async (userData) => {
    try {
        const newUser = await Work.create(userData);

        return newUser;
    } catch (error) {
        // Handle errors
        console.error("Error adding new user:", error);
        throw error;
    }
};

const getAllWorks = async (email) => {
    try {
        const query = email === 'false' ? {} : email ? { 'user.email': email } : {};
        console.log('Query:', query);

        const works = await Work.find(query).sort({ date : 'desc' });
        console.log('Fetched works:', works);

        return works;
    } catch (error) {
        // Handle errors
        console.error("Error getting works:", error);
        throw error;
    }
};




module.exports = {
    addNewWork,
    getAllWorks
};

