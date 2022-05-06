import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouters from "./routes/seedRoutes.js";
import productRouters from "./routes/ProductRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error", err.message);
  });

const app = express();

app.use("/api/seed", seedRouters);
app.use("/api/products", productRouters);

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("listening on port", port);
});
