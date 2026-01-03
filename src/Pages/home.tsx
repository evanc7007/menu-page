import WokFire from "../assets/Wok_Fire.jpg";
import Menu from "../assets/menu2026_01.jpg";
import "./home.css";

function Home() {
    return (
        <>
            <div id="homeContainer">
                <div id="homeBody">
                    <img id="WokFireImg" src={WokFire} alt="Wok" />
                </div>
            </div>
            <div id="restaurantDesc">
                <h1>Yum Yum No.8</h1>
                <h3>
                    <strong>Local Chinese Restaurant</strong>
                </h3>
                <p>
                    Family Owned: we are a restaurant that strives to serve your
                    every Chinese food needs. Our flavors are enjoyed by
                    thousands in our community. Enjoy our excellent food and
                    great prices by either eating in or ordering takeout. We
                    specialize in Cantonese, Szechuan, and Hunan dishes.
                </p>
                <p>Find our location in Harriman, Tennessee!</p>
            </div>
            <div className="buttonBox">
                <a className="btn btn-lg" href="#/location" role="button">
                    Find Us
                </a>
            </div>
            <div className="redBox">
                <div id="menudiv">
                    <img id="Menu" src={Menu} alt="Menu Image" />
                </div>
                <div className="MenuBox">
                    <h2>Menu</h2>
                    <p>
                        Over 100 items listed on our menu. There is something
                        for everyone. Try our General Tso's Chicken or Beef and
                        Broccoli, or even anything in our Special Combination
                        Plates. You can never go wrong.
                    </p>
                    <a className="btn btn-lg" href="#/location" role="button">
                        See Menu
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home;
