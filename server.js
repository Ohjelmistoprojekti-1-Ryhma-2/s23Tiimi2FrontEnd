const express = require('express');
const cors = require('cors');

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
  console.log(`Server is running on port ${port}`);
});

// Handle preflight requests
app.options('*', (req, res) => {
  res.sendStatus(204);
});

app.get('/api/products', (req, res) => {
  // ... Tässä käsitellään itse reitti ...
  res.json({ /* your response data */ });
});
