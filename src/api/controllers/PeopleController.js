const {
    addNewUser,
    getUserByEmail,
    getAllEmployees,
    updateEmployee,
    fireEmployee,
    updateVerification
} = require("../../lib/services/PeopleService");

const updateUser = async (req, res) => {
    try {
        const { email } = req.params;
        console.log(req.query);
        const queryInfo = req.query?.role || req.query?.isVerified;

        if (req.query?.role) {
            const result = await updateEmployee(email, queryInfo);
            res.status(201).json(result);
        }
        else {
            const result = await updateVerification(email, queryInfo);
            res.status(201).json(result);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const fireUser = async (req, res) => {
    try {
        const { email } = req.params;
        console.log(req.query);
        const isFired = req.query.isFired;
        const result = await fireEmployee(email, isFired);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createNewUser = async (req, res) => {
    try {
        const userData = req.body;
        const result = await addNewUser(userData);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserByEmailController = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await getUserByEmail(email);
        console.log(user,"56");
        if (user?.isFired) {
            const error = new Error("This account has been banned.");
            error.statusCode = 403; // Custom status code for banned user
            throw error;
        }
        
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error.message, "63");
    
        if (error.statusCode === 403) {
            res.status(403).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    
};

const getAllEmployee = async (req, res) => {
    console.log("all employees");
    try {
        const users = await getAllEmployees();

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
    createNewUser,
    getUserByEmailController,
    getAllEmployee,
    updateUser,
    fireUser
};
