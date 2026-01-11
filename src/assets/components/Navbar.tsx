import "./Navbar.css";
import { useLocation } from "react-router-dom";
import Logo from "../Logo.png"

function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img id="logo" src={Logo} alt="Logo"></img>
                    Yum Yum No.8
                </a>
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
                                <a
                                    className={`nav-link ${
                                        location.pathname == "/" && "active"
                                    }`}
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        location.pathname == "/menu" && "active"
                                    }`}
                                    href="/menu"
                                >
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        location.pathname == "/location" && "active"
                                    }`}
                                    href="/location"
                                >
                                    Location
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        location.pathname == "/contact" && "active"
                                    }`}
                                    href="/contact"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
