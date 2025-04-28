const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy menu
const menu = [
  { id: 1, name: 'Veg Sandwich', price: 50 },
  { id: 2, name: 'Paneer Roll', price: 80 },
  { id: 3, name: 'Cold Coffee', price: 40 }
];

// API to get menu
app.get('/menu', (req, res) => {
  res.json(menu);
});

// API to place order
app.post('/order', (req, res) => {
  const order = req.body;
  console.log('New Order Received:', order);
  res.status(201).send({ message: 'Order placed successfully!' });
});

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to QuickBite Backend 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
