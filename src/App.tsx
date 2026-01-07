import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Pages/menu";
import Home from "./Pages/home";
import Location from "./Pages/location";
import Contact from "./Pages/contact";
import Navbar from "./assets/components/Navbar";
import ScrollToTop from "./assets/components/ScrollToTop";
import Footer from "./assets/components/Footer";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <div id="bodyele">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer></Footer>
        </Router>
    );
}

export default App;
