import express from "express";
import {
  createUserController,  // Controller to handle user creation
  // getUserByIdController,  // Controller to fetch user by ID (commented out)
  // updateUserDataController,  // Controller to update user data (commented out)
  loginUserController,   // Controller to handle user login
} from "../../modules/users/controller.js";

import {
  // getUserByIdValidator,  // Validator for user ID (commented out)
  createUserValidator,   // Validator for user creation
} from "../../modules/users/validators.js";


const user_router = express.Router();  // Create a new router instance

// Route to sign up a new user, validated by createUserValidator, handled by createUserController
user_router.post("/signup", createUserValidator, createUserController);

// Route to log in a user, handled by loginUserController
user_router.post("", loginUserController);

// Uncomment and use if needed:
// Route to fetch user by ID, validated by getUserByIdValidator, handled by getUserByIdController
// user_router.get("/username/:id", getUserByIdValidator, getUserByIdController);

// Route to update user data, handled by updateUserDataController
// user_router.post("/update/:id/:username", updateUserDataController);

export { user_router };  // Export the user router for use in other parts of the application