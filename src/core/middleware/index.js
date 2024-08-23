// Middleware to log each incoming API request
const apiLoggerMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.path}`); // Logs the HTTP method and the requested path
  next(); // Proceeds to the next middleware or route handler
};

// Middleware to handle 404 Not Found errors
const notFoundErrorHandler = (req, res, next) => {
  res.status(404).json({ message: `The route ${req.path} is not found.` }); // Responds with a 404 status and a message indicating the route was not found
};

export {
  apiLoggerMiddleware,    // Export the request logging middleware
  notFoundErrorHandler    // Export the 404 error handling middleware
}