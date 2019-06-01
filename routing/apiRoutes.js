var friends = require("../app/data/friends.js");

module.exports = function(app) {
//show all possible matches
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    app.post("/api/friends", function(req, res) {
        var totalDiff = 0;
        vr bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        }
    })

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    })

    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    }
}



//retreiving data from user
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});