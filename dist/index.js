import express from "express";
var app = express();
app.get('/', function (req, res) {
    console.log("the express is working");
    res.json({ success: "hello my express app" });
});
app.listen(4000, function () {
    console.log(" http://localhost:4000");
});
