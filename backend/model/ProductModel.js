import mongoose from "mongoose";
import { ProductSchema } from "../schemas/ProductSchema.js"; // ✅ Ensure path is correct

const Product = mongoose.model("Product", ProductSchema);
export default Product;
