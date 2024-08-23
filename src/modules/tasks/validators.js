import Joi from "joi";

// Validator middleware to validate task ID in request parameters
const getTodoByIdValidator = async (req, res, next) => {
  try {
    const paramsSchema = Joi.object({
      id: Joi.number().required(),  // Task ID must be a number and is required
    }).required();

    const validatedParams = await paramsSchema.validateAsync(req.params);  // Validate request parameters
    req.validatedParams = validatedParams;  // Attach validated params to the request object

    next();  
  } catch (error) {
    res.status(400).json({ message: error.message });  
  }
};

// Validator middleware to validate and set defaults for task creation
const createTaskValidator = async (req, res, next) => {
  try {
    if (!req.body.duedate) {  
      req.body.duedate = new Date();  // Set current date if 'duedate' is not provided  
    }  

    const bodySchema = Joi.object({
      title: Joi.string().required(),         // Task title is required and must be a string
      description: Joi.string().required(),   // Task description is required and must be a string
      duedate: Joi.date(),                    // 'duedate' must be a valid date
      is_completed: Joi.boolean().required(), // Task completion status is required and must be a boolean
    }).required();

    const validatedBody = await bodySchema.validateAsync(req.body);  // Validate request body
    req.validatedBody = validatedBody;  // Attach validated body to the request object

    next();  // Proceed to the next middleware/controller
  } catch (error) {
    res.status(400).json({ message: error.message });  // Send error message if validation fails
  }
};

// Validator middleware to validate task update data
const updateTaskValidator = async (req, res, next) => {
  try {
    const bodySchema = Joi.object({
      id: Joi.number().required(),             // Task ID is required and must be a number
      title: Joi.string().required(),          // Task title is required and must be a string
      description: Joi.string().required(),    // Task description is required and must be a string
      duedate: Joi.date(),                     // 'duedate' must be a valid date
      is_completed: Joi.boolean().required(),  // Task completion status is required and must be a boolean
    }).required();

    const validatedBody = await bodySchema.validateAsync(req.body);  // Validate request body
    req.validatedBody = validatedBody;  // Attach validated body to the request object

    next();  // Proceed to the next middleware/controller
  } catch (error) {
    res.status(400).json({ message: error.message });  // Send error message if validation fails
  }
};

export { getTodoByIdValidator, createTaskValidator, updateTaskValidator };  // Export validators for use in routes