'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('welcome to Devops ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
