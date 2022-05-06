import express from "express";
import Product from "../models/ProductModels.js";
import data from "../data.js";
import User from "../models/UserModel.js";

const seedRouters = express.Router();

seedRouters.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteOne({});
  const createdUsers = await User.insertMany(data.Users);
  res.send({ createdProducts });
});
export default seedRouters;
