const express = require("express");
const { uploadMedia, getAllMedia } = require("../controllers/mediaController");
const upload = require("../middleware/uploadMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/upload", authMiddleware, upload.single("file"), uploadMedia);
router.get("/all", getAllMedia);

module.exports = router;
