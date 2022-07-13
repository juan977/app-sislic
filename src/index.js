const app = require('./app')
require('dotenv').config()

const express = require('express');
const path = require('path')

app.set('port', process.env.SERVER_PORT || 3000);

//Permisos
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", process.env.URI_BACKEND);
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        'X-Requested-With, Authorization, Content-Type, Content-Length'
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

//Routes
app.use(require('./routes/image.router'));

//Static files
app.use("/upload", express.static(path.join(__dirname, '/routes/public')))

//Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    });
