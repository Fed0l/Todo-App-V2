import {
  // getUserById,         // Function to get user by ID (commented out)
  getUserByUsername, // Function to get user by username
  createUser, // Function to create a new user
  // updateUserData      // Function to update user data (commented out)
} from "../../models/users/index.js";
import { hash, validatHash } from "../../core/utils/encryption/index.js"; // Import functions for hashing and validating passwords
import { jwtSign } from "../../core/auth/jwt-auth.js"; // Import function to generate JWT

// Service to validate user login and generate JWT
async function validatLoginUserService(username, password) {
  const userInfo = await getUserByUsername(username); // Fetch user by username
  if (!userInfo) {
    throw new Error("The username or password is incorrect"); // Throw error if user not found
  }
  const validatedHash = await validatHash(password, userInfo.password); // Validate password hash
  if (!validatedHash) {
    throw new Error("The username or password is incorrect"); // Throw error if password is invalid
  }
  const jwtUserData = {
    // Prepare user data for JWT
    id: userInfo.id,
    username: userInfo.username,
    name: userInfo.firstname,
    lastName: userInfo.lastname,
  };
  const userJwt = jwtSign(jwtUserData); // Generate JWT
  return userJwt; // Return the generated JWT
}

// Service to create a new user with hashed password
async function createUserService(
  username,
  password,
  firstName,
  lastName,
  email,
  role = "user"
) {
  const encryptedPassword = await hash(password); // Hash the password
  return createUser(
    username,
    encryptedPassword,
    firstName,
    lastName,
    email,
    role
  ); // Create user with hashed password
}

// Uncomment if needed:
// Service to update user data (commented out)
// async function updateUserDataService(id, username) {
//     updateUserData(id, username);
// }

// Service to get user by ID (commented out)
// async function getUserByIdService(id) {
//     return getUserById(id);
// }

export {
  // getUserByIdService,      // Export get user by ID service (commented out)
  validatLoginUserService, // Export validate login user service
  createUserService, // Export create user service
  // updateUserDataService   // Export update user data service (commented out)
};
