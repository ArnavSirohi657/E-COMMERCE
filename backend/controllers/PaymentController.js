import { v4 as uuidv4 } from "uuid";

export const createFakeOrder = (req, res) => {
  const amount = req.body.amount;

  const fakeOrder = {
    id: "order_" + uuidv4(), // Random unique order ID
    amount: amount * 100, // Razorpay works with paise
    currency: "INR",
  };

  res.status(200).json({ success: true, order: fakeOrder });
};
