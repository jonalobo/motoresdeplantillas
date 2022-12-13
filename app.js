const express = require("express");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT

const hbs = require("hbs");
const { ruta } = require("./routes/rutaIngresar");

app.set("view engine", "hbs");

app.set("views", (__dirname, "views"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.use(express.static("public"));

app.use("/", ruta);

app.listen(PORT, () => {
  console.log(`servidor en linea en el puerto ${PORT}`);
});
