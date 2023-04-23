const express = require("express");
const { CompanyModel } = require("../model/company.model");

const companiesRouter = express.Router();

companiesRouter.get("/", async (req, res) => {
  let idArray = req.body;
  try {
    let company = await CompanyModel.find({ _id: { $in: [...idArray] } });
    res.send({ status: true, company });
  } catch (err) {
    res.send({ status: false, error: err.message });
  }
});

module.exports = {
  companiesRouter,
};
