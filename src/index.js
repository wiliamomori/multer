require("dotenv/config");

const express = require('express');
const routes = require('./routes');
const path = require("path");

require('./database');

const app = express();

app.use(express.json());
app.use(routes);
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads"))
);

app.listen(process.env.PORT || 3333);