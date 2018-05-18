//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8000;

//Set up the Express app to handle data parsing(just in case I do use it)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Static directory
app.use(express.static('assets'));

//Routes
require("./routes/html-routes.js")(app);

app.listen(PORT, ()=> {
    console.log("App listening on PORT " + PORT);
})