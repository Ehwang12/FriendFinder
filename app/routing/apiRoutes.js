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
    });

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    });

    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    };
}



