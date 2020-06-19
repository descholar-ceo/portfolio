const express = require('express');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(express.static(path.resolve(__dirname, '../../build/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

// eslint-disable-next-line no-console
const server = app.listen(port, () => { console.log(`frontend server is running on port ${port}`); });

module.exports = server;
