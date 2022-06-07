const express = require('express');
const app = express();

// Config
const config = require('./config.json');

// Cors
const cors = require('cors');
app.use(
  cors({
    origin: config.allowed_origins,
  }),
);

// Port
const port = config.port;

// Route imports
const queryToHexRoute = require('./routes/queryToHexRoute');

app.use(express.json());

app.use('/api', queryToHexRoute);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
