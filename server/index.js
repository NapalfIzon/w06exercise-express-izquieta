const chalk = require("chalk");
const debug = require("debug")("calculator:indexServer");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const initializeServer = (portNumber) => {
  const server = app.listen(portNumber, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${portNumber}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Ha habido un error al iniciar el servidor."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`El puerto ${portNumber} está en uso.`));
    }
  });
};

app.get("/", (req, res) => {
  res.json([{ id: 1, text: "test OK" }]);
});

module.exports = initializeServer;
