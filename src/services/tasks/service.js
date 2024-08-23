import {
  getAllTaskByUserID,
  createTask,
  updateTaskById,
  deleteTaskById,
} from "../../models/tasks/index.js";

// Service to get all tasks for a specific user ID
async function getAllTaskByUserIDService(userId) {
  const taskList = await getAllTaskByUserID(userId);  // Fetch tasks for the user
  if (!taskList || taskList.length === 0) {  // Check if tasks are empty or undefined
    return;  // Return undefined if no tasks found
  }
  return taskList;  // Return the list of tasks
}

// Service to create a new task for a user
async function createTaskService(user_id, title, description, duedate, is_completed) {
  await createTask(user_id, title, description, duedate, is_completed);  // Call model function to create task
}

// Service to delete a task by its ID
async function deleteTaskByIdservice(id) {
  await deleteTaskById(id);  // Call model function to delete task
}

// Service to update a task by its ID
async function updateTaskByIdService(id, title, description, duedate, is_completed) {
  await updateTaskById(id, title, description, duedate, is_completed);  // Call model function to update task
}

export {
  getAllTaskByUserIDService,  // Export service to get all tasks by user ID
  createTaskService,          // Export service to create a task
  deleteTaskByIdservice,      // Export service to delete a task
  updateTaskByIdService,      // Export service to update a task
}