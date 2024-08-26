# TODO Website Backend

## Overview

This project aims to develop a simple to-do list application with user authentication. Users can register, log in, and manage their tasks securely. The backend is developed using Node.js and Express, and is integrated with a PostgreSQL database for data management. The project uses GitHub for version control and collaboration, and the final application is dockerized and deployed to a server.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building the REST API.
- **PostgreSQL**: Relational database for storing user and task data.
- **bcryptjs**: Library for hashing passwords.
- **cors**: Middleware for handling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables.
- **joi**: Validation library for API requests.
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens.

## Installation Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Fed0l/Todo-App-V2
   cd Todo-App-V2
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Run:

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Copy the `.env.sample` file to a new file named `.env` and fill in the necessary values:

   ```plaintext
   # Database information
   PGHOST=your-host
   PGDATABASE=your-database
   PGUSER=your-username
   PGPASSWORD=your-password
   PGPORT=5432
   PGSSL=true

   # Program running port
   PORT=3001

   # Node environment
   NODE_ENV=production

   # Bcrypt rounds
   BCRYPT_ROUNDS=10

   # JWT Sign Key
   SIGN_KEY=your-jwt-sign-key
   ```

## Usage

1. **Start the Server**

   Run the following command to start the backend server:

   ```bash
   npm start
   ```

2. **API Endpoints**

   - **POST /signup**: Register a new user.
   - **POST /**: Route to log in a user
   - **GET /user_id/**: Retrieve all tasks for the logged-in user.
   - **POST /create/newtask/**: Create a new task.
   - **POST /task/**: update a task.
   - **DELETE/deletetask/:id**: Delete a task by ID

   Ensure to include the JWT in the `Authorization` header for protected routes.

## Configuration

- **Port**: The application runs on port `3001` by default.
- **Database**: Configured via `.env` file.
- **JWT Sign Key**: Required for generating tokens, set in `.env`.

## Database Setup

- The project uses PostgreSQL hosted on Neon. Ensure that the database is created and accessible according to the `.env` configuration.


## Deployment

The project is dockerized for deployment. To deploy:

1. **Build and Run Docker Containers**

   Use the following commands to build and run the Docker containers:

   ```bash
   docker-compose build
   docker-compose up
   ```

   This will start both the frontend and backend services.

## Contributing

Contributions are welcome! Please follow these guidelines:

- Fork the repository and create a new branch for your changes.
- Ensure your code follows the existing style and passes all tests.
- Submit a pull request with a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [mohseni.fedros@gmail.com](mailto:mohseni.fedros@gmail.com).
