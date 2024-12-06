import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import cartRoutes from "./routes/cartRoutes.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const User = {
//   id,

//   name,

//   email,

//   password,

//   cart,
// };

// const Cart = {
//   id,

//   total,

//   products,

//   quantity,
// };

// const Product = {
//   name,

//   quantity,

//   price,

//   dateAdded,
// };
