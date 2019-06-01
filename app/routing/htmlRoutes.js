var path = require("path");

module.exports = function(app) {

    //GET route to survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/routing/survey.html"));
    });
  
//route to home page
app.use("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/routing/home.html"));
    });
}

