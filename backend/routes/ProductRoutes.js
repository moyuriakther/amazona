import express from "express";
import Product from "../models/ProductModels.js";

const productRouters = express.Router();

productRouters.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouters.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

productRouters.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

export default productRouters;
