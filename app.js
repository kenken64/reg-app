var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.post("/api/user", function (req, res) {

    console.log("Relieved User Object", req.body);

    res.status(200).json(req.body.user);
});

app.listen(PORT, function () {
    console.info("App Server started on port", PORT);
});
