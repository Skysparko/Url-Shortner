const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", async (req, res) => {
  console.log("dirName", __dirname);
  const htmlPath = path.join(__dirname, "public", "index.html");
  res.sendFile(htmlPath);
});

module.exports = router;
