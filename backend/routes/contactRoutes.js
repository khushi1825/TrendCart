const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST - save contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ msg: "Message sent successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;