import Accordion from "../assets/components/Accordion";
import Pepper from "../assets/spicy.png";
import "./menu.css";

function Menu() {
    return (
        <div className="menu-content">
            <div className="topgap"></div>
            <Accordion>Full Menu</Accordion>
            <div className="legendBox">
                <img className="pepper" src={Pepper} alt="Pepper" />{" "}
                <p id="legend">Indicates Spicy. Spice level can be adjusted.</p>
            </div>
            <div className="legendBox"><p id="legend">****Exchange White Rice for Fried Rice for $1. Exchange Rice for Noodles for $2.</p></div>
            <div className="bottomgap"></div>
        </div>
    );
}

export default Menu;
