const User = require("../../models/User");

const addNewUser = async (userData) => {
    try {
        const newUser = await User.create(userData);

        return newUser;
    } catch (error) {
        // Handle errors
        console.error("Error adding new user:", error);
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        console.log(user,"18");
        // if(user?.isFired){
        //     throw "This account has been banned.";
        // }
        return user;
    } catch (error) {
        // Handle errors
        console.error("Error :", error);
        throw error;
    }
};

const getAllEmployees = async () => {
    try {
        const users = await User.find();

        const employees = users.filter((user) => (user.role === 'employee') || (user.role === 'hr') );
        return employees;

    } catch (error) {
        // Handle errors
        console.error("Error getting employees:", error);
        throw error;
    }
}

const updateEmployee = async (email, role) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ email }, { role }, { new: true });

        if (!updatedUser) {
            throw new Error("User not found");
        }

        return updatedUser;
    } catch (error) {
        // Handle errors
        console.error("Error updating employee role:", error);
        throw error;
    } 
}

const updateVerification = async (email, isVerified) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ email }, { isVerified }, { new: true });

        if (!updatedUser) {
            throw new Error("User not found");
        }

        return updatedUser;
    } catch (error) {
        // Handle errors
        console.error("Error updating employee role:", error);
        throw error;
    }
}



const fireEmployee = async (email, isFired) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ email }, { isFired }, { new: true });

        if (!updatedUser) {
            throw new Error("User not found");
        }

        return updatedUser;
    } catch (error) {
        // Handle errors
        console.error("Error updating employee role:", error);
        throw error;
    }
};


module.exports = {
    addNewUser,
    getUserByEmail,
    getAllEmployees,
    updateEmployee,
    fireEmployee,
    updateVerification
};

