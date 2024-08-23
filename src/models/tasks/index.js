import { query } from "../../core/database/databaseHandler.js";

const schema = "public";
const table = "tasks";

// Retrieve all tasks for a specific user by user ID
async function getAllTaskByUserID(user_id) {
  const sql = `select * from ${schema}.${table} 
    where userid = $1;`;  // SQL query to select tasks by user ID
  const res = await query(sql, [user_id]);  // Execute query and get results
  return res.rows;  // Return the rows of tasks
}

// Retrieve a specific task by its ID
async function getTaskById(id) {
  const sql = `select * from ${schema}.${table} 
    where id = $1;`;  // SQL query to select task by ID
  const res = await query(sql, [id]);  // Execute query and get results
  return res.rows;  // Return the rows of the task
}

// Create a new task for a user
async function createTask(user_id, title, description, duedate, is_completed) {
  const sql = `INSERT INTO 
    ${schema}.${table} 
    (userid, title, description, duedate, is_completed) 
    VALUES ($1, $2, $3, $4, $5);`;  // SQL query to insert a new task
  await query(sql, [
    user_id,
    title,
    description,
    duedate,
    is_completed,
  ]);  // Execute query to insert task
}

// Update an existing task by ID
async function updateTaskById(id, title, description, duedate, is_completed) {
  const res = await getTaskById(id);  // Retrieve current task details
  console.log("res", res);  // Log the current task details
  let sql;
  if (
    res[0].title !== title ||
    res[0].description !== description ||
    res[0].duedate !== duedate ||
    res[0].is_completed !== is_completed
  ) {
    sql = `update ${schema}.${table}
    set title = $2, description = $3, duedate = $4, is_completed = $5 
    where id = $1;`;  // SQL query to update task if any field has changed
  }
  const result = await query(sql, [
    id,
    title,
    description,
    duedate,
    is_completed,
  ]);  // Execute query to update task
  return result;  // Return the result of the update operation
}

// Delete a task by its ID
async function deleteTaskById(id) {
  const sql = `delete from ${schema}.${table}
    where id = $1;`;  // SQL query to delete a task by ID
  const res = await query(sql, [id]);  // Execute query to delete task
  return res;  // Return the result of the delete operation
}

export { getAllTaskByUserID, createTask, updateTaskById, deleteTaskById };