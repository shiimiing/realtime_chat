const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log("An user connected")
    io.emit('data', 'Hello User')
    socket.on("msg", (content) => {
        socket.broadcast.emit("send", content)
    })
})

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(1212);