

export default function Component5() {
    
    const banners = [
        {
            image: "/FashionPage/Fashion40.png",
            label: "Mens's flip flops",
        },
        {
            image: "/FashionPage/Fashion41.png",
            label: "Mens's Casual footwear",
        },
        {
            image: "/FashionPage/Fashion42.png",
            label: "Mens's Sports shoes",
        },
        {
            image: "/FashionPage/Fashion43.png",
            label: "Fashion slippers",
        },
        {
            image: "/FashionPage/Fashion44.png",
            label: "Heels and sandals ",
        },
        {
            image: "/FashionPage/Fashion45.png",
            label: "Women's Sports Shoes",
        },
        
    ];

    return (
        <div className="container-fluid py-4" style={{ backgroundColor: "#f6f6f6" }}>
            <h4 className="fw-bold mb-3 px-4">Foot wear</h4>

            <div className="position-relative">
                {/* Left Arrow */}
                

                {/* Scrollable Banner */}
                <div
                   
                    className="d-flex overflow-auto px-5 gap-3"
                    style={{
                        scrollBehavior: "smooth",
                        whiteSpace: "nowrap",
                    }}
                >
                    {banners.map((src, index) => (
                        <div
                            key={index}
                            className="bg-white rounded shadow-sm flex-shrink-0 d-flex flex-column align-items-center justify-content-center"
                            style={{ width: "260px", height: "250px", padding: "10px" }}
                        >
                            <img
                                src={src.image}
                                alt={`Banner ${index + 1}`}
                                className="img-fluid"
                                style={{ maxHeight: "180px", objectFit: "contain" }}
                            />
                            <p className="text-center fw-semibold mt-2">{src.label}</p>
                        </div>
                    ))}


                </div>

                {/* Right Arrow */}
                
            </div>
        </div>
    );
}
