const express = require("express");
const {
  createClient,
 
} = require("../controler/clientcontroller");

const router = express.Router();

router.post("/createClient", createClient);

router.get("/getClient", getClient);

router.get("/history", history);


module.exports = router;