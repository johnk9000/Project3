const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 9000;
const URI = process.env.MONGODB_URI || "mongodb://localhost/fighters";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
  });