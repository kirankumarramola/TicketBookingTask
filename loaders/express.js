const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({
    limit: "100mb",
    parameterLimit: 5000000,
    extended: true
}));

module.exports = app;