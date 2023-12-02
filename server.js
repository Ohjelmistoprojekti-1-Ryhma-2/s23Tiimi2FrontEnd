// const express = require('express');
// const cors = require('cors');
// const http = require('http');

// const app = express();
// const port = 8080;

// // Allow requests from http://localhost:5173
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// }));

// // Middleware to parse JSON
// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // Handle preflight requests
// app.options('*', (req, res) => {
//   res.sendStatus(204);
// });


// app.post('/api/customers', (req, res) => {
//   try {
//     // Extract registration data from the request body
//     const { name, address, phone, email } = req.body;

//     // Check if the username is already taken (assuming phone or email as a username)
//     const existingUser = registeredUsers.find(user => user.phone === phone || user.email === email);
//     if (existingUser) {
//       return res.status(400).json({ error: 'User with the provided phone or email already exists' });
//     }

//     // Simulate storing the user in a database (in-memory array in this example)
//     const newUser = { name, address, phone, email };
//     registeredUsers.push(newUser);

//     // Respond with a success message
//     res.json({ message: 'Registration successful', user: newUser });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }

//   // DELETE endpoint to delete a customer by phone or email
//   app.delete('/api/customers/:identifier', (req, res) => {
//     try {
//       const identifier = req.params.identifier;

//       // Find and remove the user based on phone or email
//       const index = registeredUsers.findIndex(user => user.phone === identifier || user.email === identifier);

//       if (index === -1) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       const deletedUser = registeredUsers.splice(index, 1)[0];

//       // Respond with a success message
//       res.json({ message: 'User deleted successfully', user: deletedUser });
//     } catch (error) {
//       console.error('Error during deletion:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
// });


// // DELETE endpoint to delete a customer by phone or email
// app.delete('/api/customers/:identifier', (req, res) => {
//   try {
//     const identifier = req.params.identifier;

//     // Find and remove the user based on phone or email
//     const index = registeredUsers.findIndex(user => user.phone === identifier || user.email === identifier);

//     if (index === -1) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const deletedUser = registeredUsers.splice(index, 1)[0];

//     // Respond with a success message
//     res.json({ message: 'User deleted successfully', user: deletedUser });
//   } catch (error) {
//     console.error('Error during deletion:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// // Example endpoint for fetching product data (unchanged from your provided code)
// app.get('/api/products', async (req, res) => {
//   try {
//     // Define the options for the HTTP request
//     const options = {
//       hostname: 'localhost',
//       port: 8080,
//       path: '/api/products',
//       method: 'GET',
//     };

//     // Make the HTTP request
//     const externalRequest = http.request(options, (externalResponse) => {
//       let data = '';

//       // Concatenate chunks of data
//       externalResponse.on('data', (chunk) => {
//         data += chunk;
//       });

//       // Send the data back to the client once the response is complete
//       externalResponse.on('end', () => {
//         const products = JSON.parse(data);
//         res.json(products);
//       });
//     });

//     // Handle errors
//     externalRequest.on('error', (error) => {
//       console.error('Error making external request:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });

//     // End the request
//     externalRequest.end();
//   } catch (error) {
//     console.error('Error fetching product data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// 
// THESE WERE COPIED FROM PACKAGE.JSON AND PACKAGE-LOCK.JSON:
//
// "cors": "^2.8.5",
// "react-router-dom": "^6.20.0"
//
// "cors": "^2.8.5",
// "react-router-dom": "^6.20.0"
