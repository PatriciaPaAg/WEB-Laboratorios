// Dependencies
var express = require("express");
var path = require("path");
// Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA

var tables = [

];

var waitlist = [

];

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname), "tables.html");
});

app.get("/reserve", (req, res) => {
    
    res.sendFile(path.join(__dirname), "reserve.html");
});

app.get("/api/tables", (req, res) => {
    return res.json(tables);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
});

app.post("/api/reserves", (req, res) => {
    var newReserve = req.body;

    if(tables.length() < 5 ) {
        tables.push(newReserve);
    } else {
        waitlist.push(newReserve);
    }
    res.json(newReserve);
})

// Server begins listening
app.listen(PORT, () => {
    console.log("server running on port: " + PORT)
})


