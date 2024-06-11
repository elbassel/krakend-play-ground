const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

// Define the products endpoint
app.get('/products', (req, res) => {
  res.json({products});
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});