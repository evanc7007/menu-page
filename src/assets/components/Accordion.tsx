import CategoryDropdown from "./CategoryDropdown";
import Item from "./Item";
import "./Accordion.css";

interface Props {
    children: string;
}

function Accordion({ children }: Props) {
    const comboPrice = 13.39;
    const lunchPrice = 9.0;
    const eggRollPrice = 2.1;
    const [smallSoup, largeSoup] = [3,4];
    const [smPorkChicken, lgPorkChicken] = [1,2]
    const lgBeef = 1;
    const lgShrimp = 1;
    return (
        <>
            <h2>{children}</h2>
            <div className="accordion" id="accordionExample">
                <CategoryDropdown title="Appetizers">
                    <Item itemId='1' name="Pork Egg Roll" price={eggRollPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId='2' name="Shrimp Egg Roll" price={eggRollPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId='4' name="Vegetable Egg Roll" price={eggRollPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId='5' name="Fried Wonton" price={2.1}>
                    </Item>
                    <hr></hr>
                </CategoryDropdown>
                <CategoryDropdown title="Soup">Test2</CategoryDropdown>
                <CategoryDropdown title="Fried Rice">Test</CategoryDropdown>
                <CategoryDropdown title="Lo Mein">Test</CategoryDropdown>
            </div>
        </>
    );
}

export default Accordion;
