import { useParams } from "react-router-dom";

export default function ProductDetail01() {
  const { id } = useParams();

  const staticProducts = {
    "101": {
      title: "Soft Toy",
      image: "/FunToy/SoftToy.jpeg",
      price: 499,
      description: "Soft and cuddly plush toy.",
      offer: "10% off"
    },
    "102": {
      title: "Child Cycle",
      image: "/FunToy/ChildCycle.jpeg",
      price: 1499,
      description: "Sturdy cycle for young riders.",
      offer: "20% off"
    },
    "103": {
      title: "Indoor Game Set",
      image: "/FunToy/IndoorGame.jpeg",
      price: 899,
      description: "Play fun indoor games with this kit.",
      offer: "15% off"
    },
    // ...and so on for all your products
  };

  const product = staticProducts[id];

  if (!product) return <div className="container mt-5">Product not found</div>;

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid"
        style={{ maxWidth: 300 }}
      />
      <h4 className="mt-3">₹{product.price}</h4>
      <p>{product.description}</p>
      <p className="text-success">{product.offer}</p>
    </div>
  );
}
