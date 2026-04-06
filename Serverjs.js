const express = require("express");
const fs = require("fs");
const app = express();

// Servir archivos HTML
app.use(express.static(__dirname));

app.get("/visita", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // Guardar IP en archivo
    fs.appendFile("ips.txt", ip + "\n", (err) => {
        if (err) console.log("Error guardando IP");
    });

    res.json({ ip: ip });
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});