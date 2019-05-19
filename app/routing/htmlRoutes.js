//generic catch all to direct to home page//
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//direct to survey page//
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});