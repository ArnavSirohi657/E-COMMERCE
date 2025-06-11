import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/ProductDetail.css";
import DeliveryInfo from "./DeliveryInfo";
import { Truck, ChevronRight, Shield, ArrowLeftRight } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="container py-5">
      <div className="placeholder-glow">
        <div className="placeholder col-12" style={{ height: "500px" }}></div>
      </div>
    </div>
  );

  if (!product) return <div className="container py-5">Product not found</div>;

  return (
    <div className="container py-4 amazon-product-detail">
      <div className="row">
        {/* Product Images Column - 60% width */}
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="d-flex flex-lg-row flex-column">
            {/* Thumbnails Column */}
            

            {/* Main Image Container */}
            <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-white p-3 border rounded">
              <img
                src={[product.image, ...(product.images || [])][selectedImage]}
                alt={product.title}
                className="img-fluid main-product-image"
                style={{
                  height: "700px",           // Increased height
                  width: "auto",
                  objectFit: "contain"
                }}
              />

            </div>
          </div>
        </div>

        {/* Product Info Column - 40% width */}
        <div className="col-lg-6 col-md-6">
          <h1 className="product-title mb-2" style={{ fontSize: "1.8rem" }}>{product.title}</h1>

          <div className="d-flex align-items-center mb-2">
            <div className="rating-stars text-warning me-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating || 4) ? '★' : '☆'}</span>
              ))}
            </div>
            <small className="text-primary cursor-pointer">
              {product.ratingCount || 124} ratings
            </small>
          </div>

          <hr className="my-3" />

          <div className="price-container mb-3">
            <span className="text-danger fw-bold" style={{ fontSize: "1.8rem" }}>
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <>
                <small className="text-muted ms-2">
                  <del>₹{product.originalPrice.toLocaleString()}</del>
                </small>
                <span className="text-success ms-2 fw-bold">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                </span>
              </>
            )}
          </div>

          <div className="d-flex align-items-center mb-3">
            <span className="text-success fw-bold me-2">
              <Truck size={18} className="me-1" />
              FREE delivery
            </span>
            <small className="text-muted">on orders over ₹499</small>
          </div>

          <div className="mb-4">
            <p className="mb-1"><strong>Brand:</strong> {product.brand || 'Generic'}</p>
            <p className="mb-1"><strong>Availability:</strong> <span className="text-success">In Stock</span></p>
            {product.color && <p className="mb-1"><strong>Color:</strong> {product.color}</p>}
          </div>

          <DeliveryInfo />

          <div className="quantity-selector mb-4">
            <label className="me-2 fw-bold">Quantity:</label>
            <select
              className="form-select d-inline-block w-auto border-secondary"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="button-group d-flex gap-3 mb-4">
            <button className="btn btn-warning btn-amazon-yellow flex-grow-1 py-2 fw-bold">
              Add to Cart
            </button>
            <button className="btn btn-danger btn-amazon-orange flex-grow-1 py-2 fw-bold">
              Buy Now
            </button>
          </div>

          <div className="security-info border-top pt-3">
            <div className="d-flex align-items-center mb-2">
              <Shield size={18} className="me-2 text-muted" />
              <small><strong>Secure transaction</strong></small>
            </div>
            <div className="d-flex align-items-center mb-2">
              <ArrowLeftRight size={18} className="me-2 text-muted" />
              <small><strong>Easy returns</strong> | 30-day returns policy</small>
            </div>
            <div className="d-flex align-items-center">
              <ChevronRight size={18} className="me-2 text-muted" />
              <small><strong>Sold by</strong> {product.seller || 'Amazon'}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}