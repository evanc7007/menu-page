function Contact() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow-sm">
                        <div className="card-body text-center p-4">
                            <h1
                                className="card-title mb-3"
                                style={{ color: "#bd132d" }}
                            >
                                Contact Us
                            </h1>
                            <p className="card-text mb-4">
                                Call ahead for takeout, ask about a dish, or
                                just stop by — walk-ins are always welcome.
                            </p>

                            <h5 className="mt-2 mb-2">Phone</h5>
                            <a
                                href="tel:+18658823900"
                                className="d-inline-block fs-3 fw-bold text-decoration-none mb-2"
                                style={{ color: "#bd132d" }}
                            >
                                (865) 882-3900
                            </a>
                            <p className="text-muted small mb-0">
                                For all orders
                            </p>

                            <hr className="my-4" />

                            <h5 className="mb-2">Address</h5>
                            <p className="mb-3">
                                1039 S. Roane St.
                                <br />
                                Harriman, TN 37748
                            </p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Yum+Yum+No+8+Harriman+TN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                Open in Maps
                            </a>

                            <hr className="my-4" />

                            <h5 className="mb-3">Hours</h5>
                            <ul className="list-unstyled mb-2">
                                <li>Tues – Thurs: 11:00am – 9:30pm</li>
                                <li>Fri – Sat: 11:00am – 10:30pm</li>
                                <li>Sun: 12:00pm – 9:30pm</li>
                                <li>Mon: Closed</li>
                            </ul>
                            <p className="text-muted small mb-0">
                                Check our{" "}
                                <a
                                    href="https://share.google/4l8dAjz9Sf7j6rEb0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Business Profile
                                </a>{" "}
                                for holiday hours and closures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
