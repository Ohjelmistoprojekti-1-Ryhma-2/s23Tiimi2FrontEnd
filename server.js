// backend.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Allow requests from http://localhost:5174
app.use(cors({
  origin: 'http://localhost:5174',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Your other route handling goes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle preflight requests
app.options('*', (req, res) => {
  res.sendStatus(204);
});

app.get('/api/products', (req, res) => {
  // Your route handling logic goes here
  res.json({ /* your response data */ });
});
