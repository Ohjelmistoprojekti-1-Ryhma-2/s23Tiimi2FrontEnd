const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const port = 8080;

// Allow requests from http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});

// Handle preflight requests
app.options('*', (req, res) => {
  res.sendStatus(204);
});

app.get('/api/products', async (req, res) => {
  try {
    // Define the options for the HTTP request
    const options = {
      hostname: 'localhost',
      port: 8080,
      path: '/api/products',
      method: 'GET',
    };

    // Make the HTTP request
    const externalRequest = http.request(options, (externalResponse) => {
      let data = '';

      // Concatenate chunks of data
      externalResponse.on('data', (chunk) => {
        data += chunk;
      });

      // Send the data back to the client once the response is complete
      externalResponse.on('end', () => {
        const products = JSON.parse(data);
        res.json(products);
      });
    });

    // Handle errors
    externalRequest.on('error', (error) => {
      console.error('Error making external request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });

    // End the request
    externalRequest.end();
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
