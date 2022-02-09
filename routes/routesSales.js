const express = require("express");
const router = express.Router();
const Sales = require("../db/models/sales");
const Vehicle = require("../db/models/vehicle");

//api provides all the sales data related to vehicles
router.get("/sales", async (req, res, next) => {
  const vehicle = await Vehicle.find({ name: "BMW" });
  res.json(vehicle).status(200);
});

router.post("/addSale", async (req, res, next) => {
  const vehicle = await Vehicle.find({ name: "BMW" });
  const id = vehicle[0]._id;
  const sale = new Sales({
    name: "Vishal Lade",
    address: "Nagpur Maharashtra",
    mobile: 67812345,
    vehicleId: id,
  });

  try {
    const v1 = await sale.save();
    res.json(v1).status(200);
  } catch (error) {
    console.log(error);
  }
});

//api helps to update vehicle data
router.patch("/updateSale", async (req, res, next) => {});

//api helps to remove vehicle data
router.delete("/removeSale", (req, res, next) => {
  res.send("Hello api").status(200);
});
module.exports = router;
