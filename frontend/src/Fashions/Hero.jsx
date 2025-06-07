import FashionDesc from "./FashionDesc";

export default function Hero() {
    const categories = [
        { image: "/FashionPage/Fashion01.png", label: "Men's Clothing" },
        { image: "/FashionPage/Fashion02.png", label: "Women's Clothing" },
        { image: "/FashionPage/Fashion03.png", label: "Kids' Fashion" },
        { image: "/FashionPage/Fashion04.png", label: "Footwear" },
        { image: "/FashionPage/Fashion05.png", label: "Luggage & Bags" },
        { image: "/FashionPage/Fashion06.png", label: "Jewellery" },
        { image: "/FashionPage/Fashion07.png", label: "Watches" },
        { image: "/FashionPage/Fashion08.png", label: "Beauty" },
        { image: "/FashionPage/Fashion09.png", label: "Handbags" },
        { image: "/FashionPage/Fashion10.png", label: "Sunglasses" },
    ];

    return (
        <div className="container-fluid py-3 bg-white">
            <div className="d-flex flex-nowrap overflow-auto">
                {categories.map((item, idx) => (
                    <FashionDesc
                        key={idx}
                        image={item.image}
                        label={item.label}
                    />
                ))}
            </div>
        </div>
    );
}
