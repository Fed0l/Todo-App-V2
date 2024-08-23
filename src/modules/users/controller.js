import {
    // getUserByIdService,       // Service to fetch user by ID (commented out)
    createUserService,         // Service to create a new user
    // updateUserDataService,   // Service to update user data (commented out)
    validatLoginUserService    // Service to validate user login and generate JWT
} from '../../services/users/services.js';

// const getUserByIdController = async (req,res,next) =>{
//     try {
//         const userId = req.validatedParams.id;
//         const user = await getUserByIdService(userId);
//         if (user === null){
//             res.status(404).json({
//                 message: The user with id= ${userId} is not exist.
//             });
//         } else {
//             res.json(user);
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

// Controller to create a new user
const createUserController = async (req, res, next) => {
    try {
        const { username, password, firstName, lastName, email, role } = req.validatedBody;  // Extract user details from request body
        await createUserService(username, password, firstName, lastName, email, role);  // Create new user
        res.status(201).json({ message: 'the new user added' });  // Respond with success message
    } catch (error) {
        console.log(error);  // Log any error
        res.status(500).json({ message: error.message });  // Respond with error message
    }
}



// const updateUserDataController = async(req, res, next) =>{
//     try {
//         const {id, username} = req.body;
//         await updateUserDataService(id, username);
//         res.status(201).json({
//             message: 'the user Info Updated'
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }


// Controller to handle user login and generate JWT
const loginUserController = async (req, res, next) => {
    try {
        const { username, password } = req.body;  // Extract username and password from request body
        const jwt = await validatLoginUserService(username, password);  // Validate user and get JWT
        res.status(200).json({ jwt: jwt });  // Respond with JWT
    } catch (error) {
        console.log(error);  // Log any error
        res.status(401).json({ message: error.message });  // Respond with error message for unauthorized access
    }
}


// Export controllers for use in routes
export {
    createUserController,  // Export create user controller
    // getUserByIdController,  // Export get user by ID controller (commented out)
    // updateUserDataController,  // Export update user data controller (commented out)
    loginUserController    // Export login user controller
}