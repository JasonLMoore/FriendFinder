//Displays all friends//
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});


$("#add-btn").on("click", function(event) {
    event.preventDefault();
    
    var newCharacter = {
        name: $("#name").val().trim(),
        role: $("#role").val().trim(),
        age: $("#age").val().trim(),
        forcePoints: $("#force-points").val().trim()
    };
    
    // Question: What does this code do??
    $.post("/api/characters", newCharacter)
    .then(function(data) {
        console.log(data);
        alert("Adding character...");
    });
    
});


//POST for incoming survey data and compatability logic//
app.post("/api/friends", function(req, res) {
    let newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter https://www.regexbuddy.com/regex.html//
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
});

