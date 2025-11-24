const express = require("express");
const router = express.Router();
const contactFormHandler = require("../Controller/contactController");

// POST /api/contact
router.post("/contact", contactFormHandler);

module.exports = router;

