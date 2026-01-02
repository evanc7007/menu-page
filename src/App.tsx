import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Pages/menu";
import Home from "./Pages/home";
import Navbar from "./assets/components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <div id="bodyele">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
