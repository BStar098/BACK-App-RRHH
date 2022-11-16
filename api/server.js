const morgan = require("morgan");
const db = require("./conf/db");
const express = require("express");
const cookieParser = require("cookie-parser");

const server = express();

server.use(morgan("tiny"));
server.use(express.json());
server.use(cookieParser());

db.sync({ force: false }).then(() => {
  console.log("DB Conectada");
  server.listen(parseInt(process.env.PORT), () =>
    console.log("Escuchando en el puerto" + process.env.PORT)
  );
});
