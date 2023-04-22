require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("mongoose");
const { adsRouter } = require("./routes/ads.routes");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/ads", adsRouter);

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

// [
//   {
//     primaryText:
//       "The world’s leading CRM is ready to help you simplify the business part of your small business.",
//     headline: "Salesforce for Small Business",
//     description: "Salesforce for Small Business",
//     CTA: "Sign Up",
//     imageUrl:
//       "https://www.salesforce.com/content/dam/web/en_in/www/images/home/in-hp-img-learn-whatcrm-ver2.jpg",
//     name: "Salesforce",
//   },
//   {
//     primaryText: "We like where you’re going with this.",
//     headline: "Relaxed Fit Men's Jeans",
//     description: "",
//     CTA: "Shop Now",
//     imageUrl:
//       "https://loyaltyrewardco.com/wp-content/uploads/2022/08/07e95976951d0d9b6ff97ecb3aee00a0.w3000.h1500._CR02C112C30002C1479_SX1500.jpg",
//     name: "Levi's",
//   },
//   {
//     primaryText:
//       "Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
//     headline: "Made With Recycled Plastic",
//     description: "Shop Back to School",
//     CTA: "Shop Now",
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0281/7544/files/9fd72674-0553-4414-9df9-495e97376772_510x.jpg?v=1664230374",
//     name: "Cotopaxi",
//   },
//   {
//     primaryText:
//       "The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
//     headline:
//       "Norm Macdonald's Nothing Special gives one last dose of the late comic",
//     description: "",
//     CTA: "Learn More",
//     imageUrl:
//       "https://ntvb.tmsimg.com/assets/p22186695_b_h8_aa.jpg?w=960&h=540",
//     name: "Netflix",
//   },
//   {
//     primaryText: "Visit Valentino.com, discover the new products and shop now!",
//     headline: "Valentino Hexagonal Metal Frame With Crystal Studs",
//     description: "",
//     CTA: "Shop Now",
//     imageUrl:
//       "https://media1.popsugar-assets.com/files/thumbor/WavOibBzy8zl0jDal1dbN-6Rfow/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/07/11/668/n/1922564/1fe61d8e62cc3b82ba3cc5.64333969_/i/anne-hathaway-valentino-haute-couture-show.jpg",
//     name: "Valentino",
//   },
//   {
//     primaryText:
//       "Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
//     headline: "Cooler Summers Start Here",
//     description: "Shop Purple products, designed to help you sleep cool.",
//     CTA: "Shop Now",
//     imageUrl:
//       "https://purple.com/sites/default/files/styles/small_5_4/public/2023-04/5-4_PL_Grand_Environment_v1.5_D.jpeg.webp?itok=kcrKja6G",
//     name: "Purple",
//   },
//   {
//     primaryText:
//       "Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
//     headline: "Personalized skincare for dark spots, acne, and more.",
//     description:
//       "Personalized skincare for dark spots, acne, and more. Results may vary.",
//     CTA: "Order Now",
//     imageUrl:
//       "https://curology.com/static/8cdf1bdbcad1cd026c01145872d4a954/f3c4b/woman-with-cleanser-desktop%402x.jpg",
//     name: "Curology",
//   },
// ];
