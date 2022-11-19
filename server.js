// ANCHOR to run: cd into workshop-digital-ocean-server, then node server.js 8000 in terminal
const express = require("express");
const app = express(); // Generates new server and stores it into variable
const port = process.argv[2] || 80; // NOTE argv is an array of all the things I typed in the terminal = argv[0] is node so argv[2] is the 3rd word typed in terminal while launching server

const www = express.static(`${__dirname}/www`); // __dirname refers to the root folder
app.use(www);

app.get("/", (req, res) => {
  res.send("ok");
});

//NOTE By default while accessing any server, it will request the port 80
app.listen(port, () => {
  console.log(
    `running server on port ${port}!, visit http://localhost:${port}`
  ); // shows in terminal of the server
}); // server running and waiting for request
