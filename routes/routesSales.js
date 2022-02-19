const express = require("express");
const router = express.Router();
const Sales = require("../db/models/sales");
const Vehicle = require("../db/models/vehicle");

//api provides all the sales data related to vehicles
router.get("/sales", async (req, res, next) => {
  try {
    const sales = await Sales.find();
    res.json(sales).status(200);
  } catch (error) {
    console.log(error);
    res.json({ message: error }).status(500);
  }
});

//api helps to add vehicle sales  data
router.post("/addSale", async (req, res, next) => {
  const vehicleName = req.body.vehicleName;
  const vehicle = await Vehicle.find({ name: vehicleName });
  const id = vehicle[0]._id;
  console.log(id);
  const salesObj = new Sales({
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    vehicleId: id,
  });

  try {
    const sale = await salesObj.save();
    res.json(sale).status(200);
  } catch (error) {
    console.log(error);
    res.json({ message: error }).status(500);
  }
});

//api helps to update vehicle sales  data
router.patch("/updateSale", async (req, res, next) => {});

//api helps to remove vehicle sales  data
router.delete("/removeSale", (req, res, next) => {
  res.send("Hello api").status(200);
});

module.exports = router;
