const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
//const apiRoutes = require("./routes/api")
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI || "mongodb://localhost/fighters"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.use(express.static("fightapp/public"))
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  })


app.use("/api", routes)
//app.use("/api", apiRoutes)
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

mongoose.connect(URI)

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });