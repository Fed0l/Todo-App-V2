import Joi from "joi";

// Validator middleware to validate user ID in request parameters
const getUserByIdValidator = async (req, res, next) => {
  try {
    const paramsSchema = Joi.object({
      id: Joi.number().required()  // User ID must be a number and is required
    }).required();

    const validatedParams = await paramsSchema.validateAsync(req.params);  // Validate request parameters
    req.validatedParams = validatedParams;  // Attach validated params to the request object

    next();  // Proceed to the next middleware/controller
  } catch (error) {
    res.status(400).json({ message: error.message });  // Send error message if validation fails
  }
}

// Validator middleware to validate user creation data
const createUserValidator = async (req, res, next) => {
  try {
    const bodySchema = Joi.object({
      username: Joi.string().required(),   // Username is required and must be a string
      password: Joi.string().required(),   // Password is required and must be a string
      firstName: Joi.string().required(),  // First name is required and must be a string
      lastName: Joi.string().required(),   // Last name is required and must be a string
      email: Joi.string().required(),       // Email is required and must be a string
      role: Joi.string().required()         // Role is required and must be a string
    }).required();

    const validatedBody = await bodySchema.validateAsync(req.body);  // Validate request body
    req.validatedBody = validatedBody;  // Attach validated body to the request object

    next();  // Proceed to the next middleware/controller
  } catch (error) {
    res.status(400).json({ message: error.message });  // Send error message if validation fails
  }
}

export {
  getUserByIdValidator,  // Export validator for user ID
  createUserValidator   // Export validator for user creation
}