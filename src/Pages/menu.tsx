import Accordion from "../assets/components/Accordion";
import Pepper from "../assets/spicy.png";
import MenuCover from "../assets/menu2026_02.jpg";
import MenuInside from "../assets/menu2026_01.jpg";
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

            <h2 className="printedMenuTitle">Printed Menu</h2>
            <p className="printedMenuNote">Click an image to view full size.</p>
            <div className="printedMenuGrid">
                <a href={MenuCover} target="_blank" rel="noopener noreferrer">
                    <img src={MenuCover} alt="Printed menu — cover and lunch specials" />
                </a>
                <a href={MenuInside} target="_blank" rel="noopener noreferrer">
                    <img src={MenuInside} alt="Printed menu — full menu details" />
                </a>
            </div>

            <div className="bottomgap"></div>
        </div>
    );
}

export default Menu;
