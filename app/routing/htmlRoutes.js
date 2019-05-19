const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //direct to survey page//
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}