const express = require("express");
const app = express();
const conn = require("./db/config/config");
require("dotenv").config();

const port = process.env.PORT || 8080;

const vehicles = require("./routes/routesVehicle");
const sales = require("./routes/routesSales");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", vehicles);
app.use("/api", sales);

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
