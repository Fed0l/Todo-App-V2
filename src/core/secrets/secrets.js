// PostgreSQL configuration using environment variables
const postgressEssentails = {
    host: process.env.PGHOST,          // Database host address
    database: process.env.PGDATABASE,  // Name of the database
    username: process.env.PGUSER,      // Username for the database
    password: process.env.PGPASSWORD,  // Password for the database user
    port: process.env.PGPORT,          // Port number for the database connection
    ssl: process.env.PGSSL,            // SSL configuration for secure connections
};

// JWT secret key configuration using environment variables
const JWT_SECRET = {
    signKey: process.env.SIGN_KEY      // Secret key used for signing JWT tokens
};

export {
    postgressEssentails,  // Export PostgreSQL connection essentials
    JWT_SECRET            // Export JWT signing secret
};