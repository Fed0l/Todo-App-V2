import 'dotenv/config';  // Load environment variables from a .env file
import express from 'express';  // Import Express framework
import cors from 'cors';  // Import CORS middleware
import { EXPRESS_APP } from './core/configs/index.js';  // Import app configuration settings
import { apiLoggerMiddleware, notFoundErrorHandler } from './core/middleware/index.js';  // Import custom middlewares
import { router } from './modules/tasks/routes.js';  // Import task routes
import { user_router } from './modules/users/routes.js';  // Import user routes
import { authMiddleware } from './core/middleware/auth-middlewares.js';  // Import authentication middleware

const app = express();  // Create an Express application instance
const port = EXPRESS_APP.port || 3000;  // Set the server port from configuration or default to 3000

app.use(cors());  // Enable CORS for cross-origin requests
app.use(express.json());  // Enable JSON parsing for incoming requests
app.use(apiLoggerMiddleware);  // Apply API logging middleware for request logging

// Define routes
app.use('/api/todo', authMiddleware, router);  // Use task routes with authentication middleware
app.use('/api/', user_router);  // Use user routes without authentication middleware

app.use(notFoundErrorHandler);  // Handle 404 errors for undefined routes

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);  // Log that the server is running
});