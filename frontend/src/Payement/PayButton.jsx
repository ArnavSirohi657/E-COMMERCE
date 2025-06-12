import { useEffect } from "react";

export default function PayButton({ amount }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();
    const { id: order_id, amount: orderAmount, currency } = data.order;

    const options = {
      key: "rzp_test_FAKEKEY123456", // Fake Test Key (simulated)
      amount: orderAmount,
      currency: currency,
      name: "Amazon Clone Project",
      description: "Fake Razorpay Test Transaction",
      order_id: order_id,
      handler: function (response) {
        alert("✅ Simulated Payment Successful");
        console.log("📦 Payment ID:", "pay_FAKE_" + order_id.slice(-6));
        console.log("📦 Order ID:", order_id);
        console.log("📦 Signature:", "sig_FAKE_" + order_id.slice(-6));
      },
      prefill: {
        name: "Arnav Sirohi",
        email: "arnav@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <button
        onClick={handlePayment}
        style={{
          backgroundColor: "#F37254",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Pay ₹{amount} (Fake Razorpay)
      </button>
      <p style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
        * This is a simulated payment for demo purposes only.
      </p>
    </>
  );
}
