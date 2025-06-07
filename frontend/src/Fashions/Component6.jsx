

export default function Component6() {
    
    const banners = [
        {
            image: "/FashionPage/Fashion46.png",
            label: "Women watches",
        },
        {
            image: "/FashionPage/Fashion47.png",
            label: "Men watches",
        },
        {
            image: "/FashionPage/Fashion48.png",
            label: "Fashion Jewellery",
        },
        {
            image: "/FashionPage/Fashion49.png",
            label: "Handbags ",
        },
        {
            image: "/FashionPage/Fashion50.png",
            label: "Eyewear ",
        },
        {
            image: "/FashionPage/Fashion51.png",
            label: "Men jewellery",
        },
        
    ];

    return (
        <div className="container-fluid py-4" style={{ backgroundColor: "#f6f6f6" }}>
            <h4 className="fw-bold mb-3 px-4">Budget Add-ons</h4>

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
