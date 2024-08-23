import {
  getAllTaskByUserIDService,  // Service to fetch tasks by user ID
  createTaskService,           // Service to create a new task
  deleteTaskByIdservice,       // Service to delete a task by ID
  updateTaskByIdService,       // Service to update a task by ID
} from "../../services/tasks/service.js";

// Controller to get all tasks for a specific user
const getAllTaskByUserIDcontroler = async (req, res, next) => {
  try {
    const user_id = req.user.id;  // Extract user ID from request
    const taskList = await getAllTaskByUserIDService(user_id);  // Fetch tasks for the user
    res.json(taskList);  // Send the task list as JSON response
  } catch (error) {
    console.log(error);  // Log any error
    res.status(500).json({
      message: 'the user id=${user_id} not found.',  // Respond with error message
    });
  }
};

// Controller to create a new task
const createTaskControler = async (req, res, next) => {
  try {
    const user_id = req.user.id;  // Extract user ID from request
    const { title, description, duedate, is_completed } = req.validatedBody;  // Extract task details from request body
    await createTaskService(user_id, title, description, duedate, is_completed);  // Create new task
    res.status(201).json({
      message: "the task added",  // Respond with success message
    });
  } catch (error) {
    console.log(error);  // Log any error
    res.status(500).json({
      message: error.message,  // Respond with error message
    });
  }
};

// Controller to delete a task by ID
const deleteTaskByIdControler = async (req, res, next) => {
  try {
    const taskId = req.validatedParams.id;  // Extract task ID from request parameters
    await deleteTaskByIdservice(taskId);  // Delete task by ID
    res.status(201).json({
      message: "the task deleted",  // Respond with success message
    });
  } catch (error) {
    console.log(error);  // Log any error
    res.status(500).json({
      message: error.message,  // Respond with error message
    });
  }
};

// Controller to update a task by ID
const updateTaskByIdController = async (req, res, next) => {
  try {
    const { id, title, description, duedate, is_completed } = req.validatedBody;  // Extract task details from request body
    await updateTaskByIdService(id, title, description, duedate, is_completed);  // Update task by ID
    res.status(201).json({
      message: "The task updated",  // Respond with success message
    });
  } catch (error) {
    console.log(error);  // Log any error
    res.status(500).json({
      message: error.message,  // Respond with error message
    });
  }
};

// Export controllers for use in routes
export {
  getAllTaskByUserIDcontroler,
  createTaskControler,
  deleteTaskByIdControler,
  updateTaskByIdController,
};