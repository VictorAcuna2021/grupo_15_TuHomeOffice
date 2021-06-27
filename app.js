const express = require ("express");
const app = express ();
const path = require("path")
// server
app.listen (4000, () => console.log("Server on http://localhost:3000"));

// public access
app.use(express.static(path.resolve(__dirname, "../public")));

// website routes
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views", "index.html"))); 