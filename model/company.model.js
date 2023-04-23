const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    _id: Number,
    name: String,
    url: String,
  },
  {
    versionKey: false,
  }
);

const CompanyModel = mongoose.model("companie", companySchema);

module.exports = {
  CompanyModel,
};
