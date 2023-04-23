const express = require("express");
const { AdsModel } = require("../model/ads.model");

const adsRouter = express.Router();

adsRouter.get("/", async (req, res) => {
  let { keyword } = req.headers;
  try {
    let ads = await AdsModel.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $unwind: "$company",
      },
      {
        $addFields: {
          inHeadline: {
            $regexMatch: {
              input: "$headline",
              regex: keyword,
              options: "i",
            },
          },
          inPrimarytext: {
            $regexMatch: {
              input: "$primaryText",
              regex: keyword,
              options: "i",
            },
          },
          inDescription: {
            $regexMatch: {
              input: "$description",
              regex: keyword,
              options: "i",
            },
          },
          inName: {
            $regexMatch: {
              input: "$company.name",
              regex: keyword,
              options: "i",
            },
          },
        },
      },
    ]);

    let filteredAds = [];

    for (let i = 0; i < ads.length; i++) {
      let el = ads[i];
      if (el.inHeadline || el.inPrimarytext || el.inDescription || el.inName) {
        filteredAds.push({
          _id: el._id,
          imageUrl: el.imageUrl,
          name: el.company.name,
        });
      }
    }

    res.send({ status: true, ads: filteredAds });
  } catch (err) {
    res.send({ status: false, error: err.message });
  }
});

module.exports = {
  adsRouter,
};
