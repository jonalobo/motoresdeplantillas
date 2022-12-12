const express = require("express");

const app = express();

const hbs = require("hbs");
const { ruta } = require("./routes/rutaIngresar");

app.set("view engine", "hbs");

app.set("views", (__dirname, "views"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.use(express.static("public"));

app.use("/", ruta);

app.listen("3000", () => {
  console.log("servidor en linea");
});
