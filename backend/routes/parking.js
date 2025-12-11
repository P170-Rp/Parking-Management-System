const express = require("express");
const router = express.Router();
const sendWhatsApp = require("../utils/sendWhatsApp");

const { vehicleEntry, vehicleExit, completePayment } = require("../controllers/parkingcontroller");

router.post("/entry", vehicleEntry);
router.post("/exit", vehicleExit);
router.post("/complete-payment", completePayment);

module.exports = router;
