const express = require("express");
const { AdsModel } = require("../model/ads.model");

const adsRouter = express.Router();

adsRouter.get("/", async (req, res) => {
  let { keyword } = req.headers;
  // console.log(keyword);
  try {
    let prods = [];
    if (prods.length === 0) {
      prods = await AdsModel.find({
        name: { $regex: keyword, $options: "i" },
      });
    }

    if (prods.length === 0) {
      prods = await AdsModel.find({
        primaryText: { $regex: keyword, $options: "i" },
      });
    }

    if (prods.length === 0) {
      prods = await AdsModel.find({
        headline: { $regex: keyword, $options: "i" },
      });
    }

    if (prods.length === 0) {
      prods = await AdsModel.find({
        description: { $regex: keyword, $options: "i" },
      });
    }

    res.send({ status: true, data: prods });
  } catch (err) {
    res.send({ status: false, error: err.message });
  }
});

module.exports = {
  adsRouter,
};
