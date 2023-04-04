const express = require("express");
const { getMedia } = require("../controllers/media.controller");
const router = express.Router();

router.get("/browse", getMedia)

module.exports = router;