const express = require("express");
const app = express();
const conn = require("./db/config/config");

const vehicles = require("./routes/routesVehicle");
const sales = require("./routes/routesSales");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/test/api", vehicles);
app.use("/test/api", sales);

app.listen(8080, () => {
  console.log("Server up on port 8080");
});
