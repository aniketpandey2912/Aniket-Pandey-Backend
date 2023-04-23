require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("mongoose");
const { adsRouter } = require("./routes/ads.routes");
const mongoose = require("mongoose");
const { companiesRouter } = require("./routes/companies.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/ads", adsRouter);
app.use("/companies", companiesRouter);

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.mongoURL);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Can't connect to DB");
  }

  console.log("Server running at port", process.env.PORT);
});

const ads = [
  {
    _id: 1,
    companyId: 3,
    primaryText:
      "The world’s leading CRM is ready to help you simplify the business part of your small business.",
    headline: "Salesforce for Small Business",
    description: "Salesforce for Small Business",
    CTA: "Sign Up",
    imageUrl:
      "https://www.salesforce.com/content/dam/web/en_in/www/images/home/in-hp-img-learn-whatcrm-ver2.jpg",
  },
  {
    _id: 2,
    companyId: 1,
    primaryText: "We like where you’re going with this.",
    headline: "Relaxed Fit Men's Jeans",
    description: "",
    CTA: "Shop Now",
    imageUrl:
      "https://loyaltyrewardco.com/wp-content/uploads/2022/08/07e95976951d0d9b6ff97ecb3aee00a0.w3000.h1500._CR02C112C30002C1479_SX1500.jpg",
  },
  {
    _id: 3,
    companyId: 6,
    primaryText:
      "Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
    headline: "Made With Recycled Plastic",
    description: "Shop Back to School",
    CTA: "Shop Now",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0281/7544/files/9fd72674-0553-4414-9df9-495e97376772_510x.jpg?v=1664230374",
  },
  {
    _id: 4,
    companyId: 7,
    primaryText:
      "The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
    headline:
      "Norm Macdonald's Nothing Special gives one last dose of the late comic",
    description: "",
    CTA: "Learn More",
    imageUrl:
      "https://ntvb.tmsimg.com/assets/p22186695_b_h8_aa.jpg?w=960&h=540",
  },
  {
    _id: 5,
    companyId: 9,
    primaryText: "Visit Valentino.com, discover the new products and shop now!",
    headline: "Valentino Hexagonal Metal Frame With Crystal Studs",
    description: "",
    CTA: "Shop Now",
    imageUrl:
      "https://media1.popsugar-assets.com/files/thumbor/WavOibBzy8zl0jDal1dbN-6Rfow/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/07/11/668/n/1922564/1fe61d8e62cc3b82ba3cc5.64333969_/i/anne-hathaway-valentino-haute-couture-show.jpg",
  },
  {
    _id: 6,
    companyId: 11,
    primaryText:
      "Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
    headline: "Cooler Summers Start Here",
    description: "Shop Purple products, designed to help you sleep cool.",
    CTA: "Shop Now",
    imageUrl:
      "https://purple.com/sites/default/files/styles/small_5_4/public/2023-04/5-4_PL_Grand_Environment_v1.5_D.jpeg.webp?itok=kcrKja6G",
  },
  {
    _id: 7,
    companyId: 10,
    primaryText:
      "Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
    headline: "Personalized skincare for dark spots, acne, and more.",
    description:
      "Personalized skincare for dark spots, acne, and more. Results may vary.",
    CTA: "Order Now",
    imageUrl:
      "https://curology.com/static/8cdf1bdbcad1cd026c01145872d4a954/f3c4b/woman-with-cleanser-desktop%402x.jpg",
  },
];

const companies = [
  { _id: 1, name: "Levi's", url: "http://levis.com/" },
  { _id: 2, name: "Puma", url: "http://puma.com/" },
  { _id: 3, name: "Salesforce", url: "http://salesforce.com/" },
  { _id: 4, name: "Adidas", url: "http://adidas.com/" },
  { _id: 5, name: "Nike", url: "http://nike.com/" },
  { _id: 6, name: "Cotopaxi", url: "http://cotopaxi.com/" },
  { _id: 7, name: "Netflix", url: "http://netflix.com/" },
  { _id: 8, name: "Colgate", url: "http://colgate.com/" },
  { _id: 9, name: "Valentino", url: "http://valentino.com/" },
  { _id: 10, name: "Curology", url: "http://curology.com/" },
  { _id: 11, name: "Purple", url: "http://purple.com/" },
];
