// Configuration for the Express application
const EXPRESS_APP = {
  port: process.env['PORT'],  // Set the port for the server from the environment variable 'PORT'
}

// Configuration for Bcrypt (password hashing)
const BCRYPT_CONFIG = {
  rounds: +process.env['BCRYPT_ROUNDS']  // Set the number of hashing rounds from the environment variable 'BCRYPT_ROUNDS', converting it to a number
}

export {
  EXPRESS_APP,   // Export the Express app configuration
  BCRYPT_CONFIG  // Export the Bcrypt configuration
}