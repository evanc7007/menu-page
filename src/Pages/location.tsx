function Location(){
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow-sm">
                        <div className="card-body p-0">
                            <iframe
                                title="Yum Yum No. 8 Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.205387837265!2d-84.57223222473851!3d35.91747241696131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885ddda954b9efa9%3A0xf297517865237681!2sYum%20Yum!5e0!3m2!1sen-US!2sus!4v1768876909055!5m2!1sen-US!2sus"
                                className="w-100 rounded-top"
                                style={{ height: "400px", border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="card-body text-center">
                            <h5 className="card-title mb-2">Yum Yum No. 8</h5>

                            <p className="card-text mb-3">
                                1039 S. Roane St.
                                <br />
                                Harriman, TN 37748
                            </p>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Yum+Yum+No+8+Harriman+TN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Open in Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
