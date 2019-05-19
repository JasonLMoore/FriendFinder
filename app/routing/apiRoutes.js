friendsData = require('../data/friends.js');

module.exports = function(app) {
    //Displays all friends//
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    //POST for incoming survey data and compatability logic//
    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter https://www.regexbuddy.com/regex.html//
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        friendsData.push(newFriend);

        res.json(friends);
    });
}
