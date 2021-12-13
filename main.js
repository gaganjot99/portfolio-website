const express = require("express");
const path = require("path");

const server = express();

const PORT = 3000;
server.listen(PORT, ()=>{console.log("server is running at 3000")});

server.use("/media", server.static("media"));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/main.html"));
  });

  router.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/style.css"));
  });
  router.get("/main.js", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/main.js"));
  });  