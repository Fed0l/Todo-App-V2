import jwt from 'jsonwebtoken';  // Import the jsonwebtoken library for handling JWTs
import { JWT_SECRET } from '../secrets/secrets.js';  // Import secret key configuration for JWT signing

// Function to sign data and create a JWT token
function jwtSign(data) {
    const signKeySecret = JWT_SECRET.signKey;  // Retrieve the signing key from the secret configuration
    return jwt.sign(data, signKeySecret, { expiresIn: '7d' });  // Sign the data with the key and set the token to expire in 7 days
}

// Function to validate a JWT token; throws an error if the token is invalid
function jwtValidate(jwtToken) {
    try {
        return jwt.verify(jwtToken, JWT_SECRET.signKey);  // Verify the JWT token using the signing key
    } catch (error) {
        console.log(error);  // Log the error if verification fails
        throw new Error('Invalid JWT Token!');  // Throw an error indicating that the token is invalid
    }
}

export {
    jwtSign,     // Export the function to sign JWT tokens
    jwtValidate  // Export the function to validate JWT tokens
}