'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/src`));

app.listen(port, console.log(`Listening on ${port}.`));