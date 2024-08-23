import { jwtValidate } from '../auth/jwt-auth.js';  // Import the JWT validation function

// Middleware to authenticate requests using JWT
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;  // Extract the Authorization header

        if (!authHeader) {
            throw new Error('Authorization header is missing!');  // Throw an error if the Authorization header is not provided
        }

        const jwtToken = authHeader.split(' ')[1];  // Extract the JWT token from the Authorization header (format: "Bearer <token>")
        if (!jwtToken) {
            throw new Error('JWT Token is missing!');  // Throw an error if the token is missing after splitting the header
        }

        const tokenData = jwtValidate(jwtToken);  // Validate the JWT token and extract the payload
        req.user = tokenData;  // Attach the token data (e.g., user info) to the request object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: error.message });  // Respond with a 401 status and error message if validation fails
    }
}

export {
    authMiddleware  // Export the middleware for use in routes
}