console.log("server is starting");

var express = require("express");

var app = express();

var server = app.listen(3000, listening);
function listening() {
  console.log("listening ...");
}

//i can use an aspect of express to host static files
//its saying "use out of express its ability to host static files"
app.use(express.static("website"));
