export default function FashionDesc({ image, label }) {
    return (
        <div className="text-center mx-3">
            <img 
                src={image} 
                alt={label} 
                style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }} 
            />
            <p className="mt-2 small fw-semibold">{label}</p>
        </div>
    );
}
