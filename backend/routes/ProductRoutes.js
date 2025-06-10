import express from "express";
import {
  getAllProducts,
  getProductById,
  searchProducts
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/homepage", getAllProducts);
router.get("/search", searchProducts);
router.get("/:id", getProductById);

export default router;
