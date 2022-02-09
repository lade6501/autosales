const express = require("express");
const router = express.Router();
const Vehicle = require("../db/models/vehicle");

//api to get single vehicle data
router.get("/vehicle", (req, res, next) => {
  res.send("Hello api").status(200);
});

//api to get data of all the vehicles
router.get("/allVehicles", async (req, res, next) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles).status(200);
});

//api helps to add vehicle data
router.post("/addVehicle", async (req, res, next) => {
  const vehicle = new Vehicle({
    name: req.body.name,
    price: req.body.price,
    sold: req.body.sold,
  });

  try {
    const v1 = await vehicle.save();
    res.json(v1).status(200);
  } catch (error) {
    console.log(error);
  }
});

//api helps to update vehicle data
router.patch("/updateVehicle", async (req, res, next) => {
  const v1 = await Vehicle.updateOne(
    { _id: "6202a2f58e6647b168332a96" },
    { price: 950000 },
    { upsert: true }
  );
  res.json(v1).status(200);
});

//api helps to remove vehicle data
router.delete("/removeVehicle", (req, res, next) => {
  res.send("Hello api").status(200);
});

module.exports = router;
