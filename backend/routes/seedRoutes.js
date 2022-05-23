import express from "express";
import Product from "../models/ProductModels.js";
import data from "../data.js";
import User from "../models/UserModel.js";

const seedRouters = express.Router();

seedRouters.get("/", async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouters;
