import express from "express";
import {
  getAllTaskByUserIDcontroler,  // Controller for fetching all tasks by user ID
  createTaskControler,           // Controller for creating a new task
  deleteTaskByIdControler,       // Controller for deleting a task by ID
  updateTaskByIdController,      // Controller for updating a task by ID
} from "../../modules/tasks/controller.js";
import {
  getTodoByIdValidator,  // Validator for checking task ID
  createTaskValidator,   // Validator for creating a task
  updateTaskValidator,   // Validator for updating a task
} from "../../modules/tasks/validators.js";

const router = express.Router();  // Create a new router instance

// Route to get all tasks for a user, handled by getAllTaskByUserIDcontroler
router.get("/user_id/", getAllTaskByUserIDcontroler);

// Route to create a new task, validated by createTaskValidator, handled by createTaskControler
router.post("/create/newtask/", createTaskValidator, createTaskControler);

// Route to update a task, validated by updateTaskValidator, handled by updateTaskByIdController
router.post("/task/", updateTaskValidator, updateTaskByIdController);

// Route to delete a task by ID, validated by getTodoByIdValidator, handled by deleteTaskByIdControler
router.delete("/deletetask/:id", getTodoByIdValidator, deleteTaskByIdControler);

export { router };  // Export the router for use in other parts of the application