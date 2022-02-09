const express = require("express");
const router = express.Router();
const Vehicle = require("../db/models/vehicle");

//api to get single vehicle data
router.get("/vehicle", async (req, res, next) => {
  try {
    const { name } = req.query;
    console.log(name);
    const vehicle = await Vehicle.find({ name: name });
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//api to get data of all the vehicles
router.get("/allVehicles", async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles).status(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
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
    res.status(500).json({ message: error });
  }
});

//api helps to update vehicle data
router.patch("/updateVehicle", async (req, res, next) => {
  try {
    const name = req.body.name;
    const price = req.body.price;
    const sold = req.body.sold;

    const v1 = await Vehicle.updateOne(
      { name: name },
      { name: name, price: price, sold: sold },
      { upsert: true }
    );
    res.json(v1).status(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//api helps to remove vehicle data
router.delete("/removeVehicle", async (req, res, next) => {
  try {
    const { name } = req.query;
    const v1 = await Vehicle.deleteOne({ name: name });
    res.status(200).json({
      message: `Vehicle with name ${name} deleted successfully.`,
    });
  } catch (error) {
    res.status(500).json({ message: "Some error" });
    console.log(error);
  }
});

module.exports = router;
