const express = require("express");
const app = express();

const http = require("http");

const socket = require("socket.io");
const server = http.createServer(app);
const io = socket(server);
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(3000, () => {
    console.log("app listening on 3000 port")
})