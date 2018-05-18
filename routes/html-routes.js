// Dependencies
var path = require('path');

//routes
module.exports = (app) => {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/index.html"));
      });
};