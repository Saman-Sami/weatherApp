const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

// views folder path
const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);
app.set("view engine", "hbs");

//registering partials
const partialPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialPath);

// public static path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// Routing
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("error", {
        errorMsg: "Oops!! Page not Found"
    });
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});