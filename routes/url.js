const express = require("express");
// import { nanoid } from "nanoid";
const router = express.Router();
const createDB = require("../config/db");
const Url = require("../models/UrlModel");

// const nanoid = require("nanoid");

createDB.sync().then(() => {
  console.log("db is up");
});

router.post("/", async (req, res) => {
  try {
    const baseUrl = "http://localhost:1234/urlapi";
    const { longUrl } = req.body;

    const shortId = Math.floor(Math.random() * 1000);

    const shortUrl = await Url.create({
      longUrl,
      shortUrl: shortId,
    });
    return res.status(200).json({
      status: "ok",
      shortUrl: `${baseUrl}/${shortId}`,
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/:short", async (req, res) => {
  const shortId = req.params.short;
  try {
    let dbData = await Url.findOne({
      where: {
        shortUrl: shortId,
      },
    });
    if (!dbData) {
      return res.status(404).send("Invalid short url");
    }

    return res.redirect(dbData.longUrl);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
