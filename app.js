var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.get("/", function (req, res) {
    console.log("here");
    res.sendFile("home.html", {
        root: __dirname
    });
})

app.get("/home", function (req, res) {
    console.log("here");
    res.sendFile("home.html", {
        root: __dirname
    });
})

app.get("/about", function (req, res) {
    console.log("here");
    res.sendFile("about.html", {
        root: __dirname
    });
})

app.get("/project", function (req, res) {
    console.log("here");
    res.sendFile("project.html", {
        root: __dirname
    });
})





app.listen(PORT, process.env.IP, function () {
    console.log("server is running");
})