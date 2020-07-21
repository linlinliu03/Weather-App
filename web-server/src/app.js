const path = require("path");
const express = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname,"../public");

app.set("view enigne", "hbs");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req,res) => {
    res.send("Weather page!")
});

app.listen(3000, () => console.log("Server is running!"));