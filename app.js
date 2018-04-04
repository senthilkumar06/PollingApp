const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const poll = require('./routes/poll');
require('./config/config');

const app = express();

// Set Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Create Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// CORS module
app.use(cors());

// sesrver config
const port = 3000
app.listen(port, () => console.log(`server started on port ${port}`));
app.use('/poll', poll);