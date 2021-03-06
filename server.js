//instantiate variables
var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route to home 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

//allow css/js access
app.use(express.static(__dirname + "/public"));

  //starts server to begin listening
//============================================
app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
})

