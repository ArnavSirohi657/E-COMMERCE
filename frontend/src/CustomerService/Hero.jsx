import { Link } from "react-router-dom";
import "../CSS/CustomerService.css"
export default function Hero() {
    const cardData = [
        {
            title: "Your Orders",
            description: "Track packages\nEdit or cancel orders",
            image: "/CustomerService/Orders.png",
            link: "/orders"
        },
        {
            title: "Returns and Refunds",
            description: "Return or exchange items\nPrint return mailing labels",
            image: "/CustomerService/Return.png",
            link: "/returns"
        },
        {
            title: "Manage Addresses",
            description: "Update your addresses\nAdd address, landmark details",
            image: "/CustomerService/Address.png",
            link: "/addresses"
        },
        {
            title: "Manage Prime",
            description: "View your benefits\nMembership details",
            image: "/CustomerService/Prime.png",
            link: "/prime"
        },
        {
            title: "Payment Settings",
            description: "Add or edit payment methods\nChange expired debit or credit card",
            image: "/CustomerService/Payement.png",
            link: "/payments"
        },
        {
            title: "Account Settings",
            description: "Change your email or password\nUpdate login information",
            image: "/CustomerService/Account.png",
            link: "/account"
        }
    ];

    return (
        <div className="container my-4">
            <div className="alert alert-warning d-flex align-items-center" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                <div>
                    You can view the content of this page in your preferred language, by clicking <a href="#" className="text-primary">here</a>. For detailed steps on how to change your language settings, see our <a href="#" className="text-primary">Help page</a>.
                </div>
            </div>

            <div className="alert alert-warning d-flex align-items-center" role="alert">
                <i className="bi bi-info-circle-fill me-2"></i>
                <div>
                    <span className="fw-bold text-primary">For information on our live sale events</span>, including promotions, deals, cashbacks, and quick solutions, refer to our <a href="#" className="text-primary">Help page on Sale Events</a>.
                </div>
            </div>

            <h2 className="my-4">Hello. What can we help you with?</h2>

            <div className="row g-4">
                {cardData.map((card, idx) => (
                    <div className="col-md-4" key={idx}>
                        <Link to={card.link} className="text-decoration-none text-dark">
                            <div
                                className="border rounded p-3 shadow-sm h-100 d-flex flex-column justify-content-between hover-shadow"
                                style={{ transition: "0.2s", cursor: "pointer" }}
                            >
                                <div>
                                    <h5>{card.title}</h5>
                                    <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
                                        {card.description}
                                    </p>
                                </div>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="card-image"
                                />

                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
