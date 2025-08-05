const express = require('express');
const app = express();
const port = 1337;

// Middleware to parse incoming JSON data
app.use(express.json());

// Handle POST requests to /streams-webhook
app.post('/streams-webhook', (req, res) => {
  console.log('Received webhook data:', req.body); // log the data received
  res.status(200).send('Webhook received'); // respond with 200 OK
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

