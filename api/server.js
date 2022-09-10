const express = require('express');
const cors = require('cors');
const path = require('path');

// Imports
const queryToHexRoute = require('./routes/queryToHexRoute');
const config = require('./config.json');

const app = express();

app.use(
  cors({
    origin: config.allowed_origins,
  }),
);

app.use(express.json());

// Port
const port = config.port;

// Routes
app.use('/api', queryToHexRoute);

// Serving frontend
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/*', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
