const path = require("path");
const express = require("express");
const app = express();

const publicDirectoryPath = path.join(__dirname,"../public");

app.set("view engine", "hbs");

app.use(express.static(publicDirectoryPath));

app.get("", (req,res) => {
    res.render("index", {
        title: "Weather App",
        name: "Linda"
    })
})

app.get("/weather", (req,res) => {
    res.send("Weather page!")
});

app.listen(3000, () => console.log("Server is running!"));