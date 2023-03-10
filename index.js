
const { response } = require('express');
const express = require('express');
const path = require('path')


const app = express();
const port = process.env.PORT || '8000';

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(express.static(path.join(__dirname, "public")));

var links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/about"
    }
];


app.get('/', (req, res) => {
    //res.status(200).send("Test page3");
    res.render("index", { title: "Premium Korean Meal kit", menu: links });
});

app.get('/about', (req, res) => {
    //res.status(200).send("Test page3");
    res.render("about", { title: "About", menu: links });
});




app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
