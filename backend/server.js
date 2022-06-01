import express from "express";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import seedRouters from "./routes/seedRoutes.js";
import productRouters from "./routes/ProductRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

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
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.use("/api/seed", seedRouters);
app.use("/api/products", productRouters);
app.use("/api/user", userRouter);
app.use("/api/orders", orderRouter);
// console.log(orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/front-end/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/front-end/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("listening on port", port);
});
