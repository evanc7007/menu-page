import "./Navbar.css";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import Logo from "../Logo.png"

function Navbar() {
    const location = useLocation();
    const offcanvasRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<Offcanvas | null>(null);

    useEffect(() => {
        if (offcanvasRef.current) {
            instanceRef.current = Offcanvas.getOrCreateInstance(offcanvasRef.current);
        }
    }, []);

    const showOffcanvas = () => instanceRef.current?.show();
    const closeOffcanvas = () => instanceRef.current?.hide();

    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img id="logo" src={Logo} alt="Logo"></img>
                    Yum Yum No.8
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={showOffcanvas}
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    ref={offcanvasRef}
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            Navigation
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={closeOffcanvas}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname == "/" && "active"
                                    }`}
                                    aria-current="page"
                                    to="/"
                                    onClick={closeOffcanvas}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname == "/menu" && "active"
                                    }`}
                                    to="/menu"
                                    onClick={closeOffcanvas}
                                >
                                    Menu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname == "/location" && "active"
                                    }`}
                                    to="/location"
                                    onClick={closeOffcanvas}
                                >
                                    Location
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname == "/contact" && "active"
                                    }`}
                                    to="/contact"
                                    onClick={closeOffcanvas}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
