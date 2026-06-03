const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"))
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})
