export default function BrowseHelp() {
    const leftTopics = [
        "Shipping & Delivery",
        "Amazon Prime",
        "Payments & Pricing",
        "Amazon Pay",
        "Product Troubleshooting",
        "Amazon Bazaar",
        "Returns, Refunds, Replacement",
        "Ordering",
        "Managing Your Account",
        "Devices & Digital Services (D2S)",
        "More Help (D2S)",
        "Amazon Business",
        "Other Topics & More Help",
        "Self Service"
    ];

    const centerTopics = [
        "Tracking your Package",
        "Checking the Status of your Refund",
        "Return Pick-up Issues",
        "Returns and Replacements - FAQ",
        "Shipping Speeds & Charges",
        "Damaged and Defective Products - FAQ",
        "Late Shipments",
        "Cancelling an Item or Order",
        "Amazon Bazaar (available on Android Amazon shopping app only)",
        "Product Troubleshooting - FAQs",
        "Self-service video library",
        "Need more help"
    ];

    const rightTopics = [
        "Track your order",
        "Check the Status of your Refund",
        "Change Your Language Preference",
        "Manage Your Returns",
        "Sign Up for Amazon Prime",
        "Using Amazon Pay balance",
        "View Amazon Pay Transactions",
        "Manage Your Payment Methods"
    ];

    return (
        <div className="container my-5">
            <h3 className="mb-4">Browse Help Topics</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="border rounded p-3 shadow-sm h-100">
                        <h5>Recommended Topics</h5>
                        <ul className="list-unstyled">
                            {leftTopics.map((topic, index) => (
                                <li key={index} className="mb-2">
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="border rounded p-3 shadow-sm h-100">
                        <h5>Learn how to...</h5>
                        <ul className="list-unstyled">
                            {centerTopics.map((topic, index) => (
                                <li key={index} className="mb-2 text-primary" style={{ cursor: "pointer" }}>
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="border rounded p-3 shadow-sm h-100">
                        <h5>Try it Yourself</h5>
                        <ul className="list-unstyled">
                            {rightTopics.map((topic, index) => (
                                <li key={index} className="mb-2 text-primary" style={{ cursor: "pointer" }}>
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
