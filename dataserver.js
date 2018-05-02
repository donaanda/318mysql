

const express = require('express');

const endpoint = express();

function getUserData(request, response) {
    response.send('test from node');
}

endpoint.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

//server       address      function we call
endpoint.post('/users', getUserData);

//method
endpoint.listen(3000, function () {
    console.log('the server is listening on port 3000');
});

