const express = require('express');
const app = express();

// Config
const config = require('./config.json');

// Cors
const cors = require('cors');

// Route imports
const queryToHexRoute = require('./routes/queryToHexRoute');

app.use(
  cors({
    origin: config.allowed_origins,
  }),
);

app.use(express.json());

// Port
const port = config.port;

app.use('/api', queryToHexRoute);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
