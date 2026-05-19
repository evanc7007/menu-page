import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import type * as bootstrap from "bootstrap";
import Logo from "../Logo.png"

declare global {
    interface Window {
        bootstrap: typeof bootstrap;
    }
}

function Navbar() {
    const location = useLocation();

    const closeOffcanvas = () => {
        const el = document.getElementById("offcanvasNavbar");
        if (el) window.bootstrap?.Offcanvas?.getInstance(el)?.hide();
    };

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
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
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
                            data-bs-dismiss="offcanvas"
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
