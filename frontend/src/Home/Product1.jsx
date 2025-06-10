import "../CSS/Product1.css"
export default function Product1({ Heading, image1, image2, image3, image4 }) {
  return (
    <div>
      <h6 className="mb-3">{Heading}</h6>
      <div className="row row-cols-2 g-2">
        <div className="col">
          <img
            src={image1}
            alt=""
            className="img-fluid rounded product-hover-img"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
        </div>
        <div className="col">
          <img
            src={image2}
            alt=""
            className="img-fluid rounded product-hover-img"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
        </div>
        <div className="col">
          <img
            src={image3}
            alt=""
            className="img-fluid rounded product-hover-img"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
        </div>
        <div className="col">
          <img
            src={image4}
            alt=""
            className="img-fluid rounded product-hover-img"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}