const express = require("express");
const { userInfo } = require("../controllers/userController");

const router = express.Router();

router.get("/:userId", userInfo);

module.exports = router;