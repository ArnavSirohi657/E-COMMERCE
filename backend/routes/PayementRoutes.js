import express from "express";
import { createFakeOrder } from "../controllers/PaymentController.js";

const router = express.Router();
router.post("/create-order", createFakeOrder);

export default router;
