# Project Overview
The HouseTable project is a mini home evaluation system designed to help users assess the risk associated with potential loans. The system allows users to create, view, and update house records, while providing a risk calculation based on the loan amount and current value of the property.

The main features of the project include:

## Backend Development: 
A Node.js application using Sequelize ORM to manage the house records and API endpoints for creating, fetching, and updating house details.
## Frontend Development: 
A React.js application that provides a user-friendly interface for users to interact with the system.
## Risk Calculation:
 An algorithmic implementation to calculate the risk associated with each house record, taking into account the loan amount and current value. The risk is represented as a percentage between 0 and 1.
## Integration:
 The house detail view in the React.js application displays the loan amount and risk information retrieved from the API.
The project aims to showcase proficiency in Node.js, Sequelize ORM, React.js, and algorithmic problem-solving, while demonstrating an understanding of asynchronous operations, error handling, and proper code structure.

In the following sections, you will find detailed instructions on how to set up and run the applications, as well as the key functionalities provided by the system.

# Setup Node js server

To set up the Node.js backend application, please follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the command npm install to install the required dependencies specified in the package.json file.
4. Configure the database connection details in the 
### `server/config/config.json` 
file. Please make sure to configure the database connection details correctly and ensure that the required database is set up before starting the server.
5. Run the command 
### `npm run devStart`
to start the server in development mode using Nodemon, or use npm start to start the server without Nodemon.

# Setup React.js client

To set up the React.js frontend application, please follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the command npm install to install the required dependencies specified in the package.json file.
4. Update the API endpoint URL in the React.js application to match the backend server URL. The API endpoint URL is typically defined in a src/config.js. Make sure the URL points to the correct backend server address and port.
5. Run the command npm start to start the development server.
6. Open your web browser and visit http://localhost:3000 to access the React.js application.
7. Make sure that the backend server is already running and accessible before starting the React.js frontend application.


# API Documentation:

## This section provides an overview of the available endpoints in the Node.js backend application.

1. Create a new house record:

Endpoint: POST /api/houses
Description: This endpoint allows you to create a new house record in the database.
Request Body:
address (string): The address of the house.
currentValue (number): The current value of the house.
loanAmount (number): The loan amount associated with the house.
Response: The newly created house record with an automatically generated ID.

2. Fetch a house record:

Endpoint: GET /api/houses/:id
Description: This endpoint allows you to fetch a specific house record by its ID.
Request Parameters:
id (integer): The ID of the house to fetch.
Response: The house record with the specified ID.

3. 
Update a house record:

Endpoint: PUT /api/houses/:id
Description: This endpoint allows you to update a specific house record by its ID.
Request Parameters:
id (integer): The ID of the house to update.
Request Body:
address (string): The updated address of the house.
currentValue (number): The updated current value of the house.
loanAmount (number): The updated loan amount associated with the house.
Response: The updated house record with the specified ID.

**Note: All endpoints follow the RESTful API conventions and handle data in JSON format.**
**This project is a full stack engineering exercise implemented by Mikhail Lapshin Thank you fot your attention!**