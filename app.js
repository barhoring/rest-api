'use strict'

var express = require("express");
var app = express();
var routes = require('./routes.js');
var logger = require('morgan');

app.use(logger('dev'));
var jsonParser = require('body-parser').json;

app.use(jsonParser());

app.use('/questions', routes);

// catch 404 error
app.use(function(req, res, next){
    var err = new Error("not found");
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next){
    // internaL server error 500
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// unless production env. use port 3000
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`hello bar- express server is listening to you bar on port ${port}`);
});