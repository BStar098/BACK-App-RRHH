const morgan = require("morgan");
const db = require("./config/db");
const express = require("express");
const cookieParser = require("cookie-parser");
const models = require("./models");
const routes = require("./routes");
const server = express();
const cors = require("cors");

server.use(morgan("tiny"));
server.use(express.json());
server.use(cookieParser());
server.use(cors());

server.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log("DB Conectada");
  server.listen(
    process.env.PORT,
    console.log("Escuchando en el puerto", process.env.PORT)
  );
});
