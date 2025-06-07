import KitchenDesc from "./KitchenDesc";

export default function Hero() {
    const categories = [
        { image: "/KitchenPage/Kitchen01.jpg", label: "Bedding and Decor" },
        { image: "/KitchenPage/Kitchen02.jpg", label: "Appliance" },
        { image: "/KitchenPage/Kitchen03.jpg", label: "Fitness" },
        { image: "/KitchenPage/Kitchen04.jpg", label: "Automotive Products" },
        { image: "/KitchenPage/Kitchen05.jpg", label: "Kitchenware" },
        { image: "/KitchenPage/Kitchen06.jpg", label: "Home Improvement" },
        { image: "/KitchenPage/Kitchen07.jpg", label: "Tools" },
        { image: "/KitchenPage/Kitchen08.jpg", label: "Home&essential" },
        { image: "/KitchenPage/Kitchen09.jpg", label: "Outdoor" },
        { image: "/KitchenPage/Kitchen10.jpg", label: "Furniture" },
        { image: "/KitchenPage/Kitchen11.jpg", label: "Amazon brands" }
    ];

    return (
        <div className="container-fluid py-3 bg-white">
            <div className="d-flex flex-nowrap overflow-auto">
                {categories.map((item, idx) => (
                    <KitchenDesc
                        key={idx}
                        image={item.image}
                        label={item.label}
                    />
                ))}
            </div>
        </div>
    );
}
