const router = require("express").Router();
const {
  getAllCustomer,
  addNewCustomer,
} = require("../controllers/customer.controllers");

router.get("/", getAllCustomer);
router.post("/", addNewCustomer);

module.exports = router;
