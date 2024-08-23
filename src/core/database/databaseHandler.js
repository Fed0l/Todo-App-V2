import pg from "pg";  // Import the 'pg' module for PostgreSQL database interaction
import { postgressEssentails } from "../secrets/secrets.js";  // Import database connection details

const { Client } = pg;  // Destructure the Client class from the pg module

// Function to execute a database query
export const query = async (sql, params) => {
  let client;  // Declare a variable to hold the database client
  try {
    client = new Client(postgressEssentails);  // Initialize a new client instance using the connection details
    await client.connect();  // Establish the connection to the database
    const res = await client.query(sql, params);  // Execute the SQL query with provided parameters
    return res;  // Return the result of the query
  } catch (err) {
    throw err;  // If an error occurs, throw it to be handled by the calling function
  } finally {
    await client.end();  // Ensure the client connection is closed in the 'finally' block, regardless of success or error
  }
};