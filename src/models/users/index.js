import { query } from "../../core/database/databaseHandler.js";

const schema = "public";
const table = "users";

// Retrieve user details by username
async function getUserByUsername(username) {
  const sql = `select * from ${schema}.${table} 
    where username = $1;`;  // SQL query to select user by username
  const res = await query(sql, [username]);  // Execute query and get results
  return res.rows[0];  // Return the first row (user) from the results
}

// Create a new user
async function createUser(username, password, firstName, lastName, email, role) {
  const sql = `INSERT INTO 
    ${schema}.${table} 
    (username, password, firstName, lastName, email, role) 
    VALUES ($1, $2, $3, $4, $5, $6);`;  // SQL query to insert a new user
  const res = await query(sql, [username, password, firstName, lastName, email, role]);  // Execute query to insert user
  return res;  // Return the result of the insert operation
}

// Uncomment if needed:
// Retrieve user details by ID (commented out)
// async function getUserById(id) {
//   const sql = `select * from ${schema}.${table} 
//     where id = $1;`;
//   const res = await query(sql, [id]);
//   return res.rows;
// }

// Update user data (commented out)
// async function updateUserData(id, username) {
//   const res = await getUserById(id);  // Retrieve current user details
//   console.log(res);  // Log the current user details
//   let sql;
//   if (res[0].username !== username) {  // Check if the username has changed
//     sql = `update ${schema}.${table}
//       set username = $2 where id = $1;`;  // SQL query to update username
//   }
//   const result = await query(sql, [id, username]);  // Execute query to update user
//   return result;  // Return the result of the update operation
// }

export {
  // getUserById,           // Export get user by ID function (commented out)
  getUserByUsername,     // Export get user by username function
  createUser,            // Export create user function
  // updateUserData        // Export update user data function (commented out)
}