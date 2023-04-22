const mongoose = require("mongoose");

const adsSchema = mongoose.Schema(
  {
    name: String,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
  },
  {
    versionKey: false,
  }
);

const AdsModel = mongoose.model("ad", adsSchema);

module.exports = {
  AdsModel,
};
