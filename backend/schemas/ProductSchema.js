import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offer: {
    type: String,
    default: "12% off",
  },
  description: {
    type: String,
    default: "Limited time deal",
  },
  category: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "Best Seller",
  },
});

export { ProductSchema };
