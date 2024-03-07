const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Sample data
let items = [{ id: 1, name: 'Item One' }];

// GET all items
app.get('/api/items', (req, res) => {
  res.status(200).json(items);
});

// GET a specific item by ID
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.status(200).json(item);
});

// POST create a new item
app.post('/api/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const item = {
    id: items.length + 1,
    name
  };
  items.push(item);
  res.status(201).json(item);
});

// PUT update an existing item by ID
app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  item.name = name;
  res.status(200).json(item);
});

// DELETE delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(index, 1);
  res.status(204).send();
});

// Handle other routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my API!' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});