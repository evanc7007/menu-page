import CategoryDropdown from "./CategoryDropdown";
import Item from "./Item";
import "./Accordion.css";

interface Props {
    children: string;
}

function Accordion({ children }: Props) {
    const comboPrice = 13.39;
    const lunchPrice = 10.59;
    const eggRollPrice = 2.1;
    const [smallSoup, largeSoup] = [4.25,6.25];
    const [smPorkChicken, lgPorkChicken] = [10.75,16.99]
    const lgBeefShrimp = 17.99;
    const chowMein = 16.99;
    const [smMeiFun, lgMeiFun] = [8.95, 14.99]
    const eggFooYoung = 14.99
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
                    <Item itemId='5' name="Fried Wonton" price={6.5}>
                        10 pieces per order, pork filling
                    </Item>
                    <hr></hr>
                    <Item itemId="6" name="Bar-B-Q Spare Ribs" price={18.25} smallPrice={9.95}>
                    </Item>
                    <hr></hr>
                    <Item itemId="7" name="Boneless Spare Ribs" price={18.25} smallPrice={9.95}>
                    </Item>
                    <hr></hr>
                    <Item itemId="9" name="Fried or Steamed Dumplings" price={9.25}>
                        8 pieces per order
                    </Item>
                    <hr></hr>
                    <Item itemId="10" name="Teriyaki Chicken on Stick" price={9.25}>
                        4 pieces per order
                    </Item>
                    <hr></hr>
                    <Item itemId="11" name="Crab Rangoon" price={8.75}>
                        10 pieces per order
                    </Item>
                    <hr></hr>
                    <Item itemId="12" name="French Fries" price={5.25} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="13" name="Fried Donuts" price={5.25} displaySizes={true}>
                        10 pieces per order
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Soup">
                    <Item itemId="14" name="Wonton Soup" price={largeSoup} smallPrice={smallSoup}>
                    </Item>
                    <hr></hr>
                    <Item itemId="15" name="Egg Drop Soup" price={largeSoup} smallPrice={smallSoup}>
                    </Item>
                    <hr></hr>
                    <Item itemId="16" name="Wonton Egg Drop Soup" price={largeSoup} smallPrice={smallSoup}>
                    </Item>
                    <hr></hr>
                    <Item itemId="17" name="Chicken Noodle or Rice Soup" price={largeSoup} smallPrice={smallSoup}>
                    </Item>
                    <hr></hr>
                    <Item itemId="18" name="Hot & Sour Soup" price={largeSoup} smallPrice={smallSoup} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="19" name="Bean Curd w. Veg Soup" price={8.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="20" name="Pork or Chicken Yat Gaw Mein" price={8.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="21" name="Shrimp or Beef Yat Gaw Mein" price={8.55}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Fried Rice">
                    <Item itemId="22" name="Plain Fried Rice" price={8.95} smallPrice={5.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="23" name="Vegetable Fried Rice" price={11.25} smallPrice={6.25}>
                    </Item>
                    <hr></hr>
                    <Item itemId="24" name="Roast Pork Fried Rice" price={12.25} smallPrice={7.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="25" name="Chicken Fried Rice" price={12.25} smallPrice={7.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="26" name="Beef Fried Rice" price={12.25} smallPrice={7.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="27" name="Shrimp Fried Rice" price={12.25} smallPrice={7.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="28" name="Crab Meat Fried Rice" price={12.25} smallPrice={7.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="29" name="House Special Fried Rice" price={14.25} smallPrice={8.25}>
                        Contains Chicken, Pork, and Shrimp
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Chow Mein">
                    <Item itemId="31" name="Vegetable Chow Mein" price={chowMein} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="32" name="Roast Pork Chow Mein" price={chowMein} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="33" name="Shrimp Chow Mein" price={chowMein} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="34" name="Beef Chow Mein" price={chowMein} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="37" name="Chicken Chow Mein" price={chowMein} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="35" name="House Special Chow Mein" price={chowMein} displaySizes={true}>
                        Contains Chicken, Pork, and Shrimp
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Lo Mein">
                    <Item itemId="38" name="Vegetable Lo Mein" price={10.99} smallPrice={6.75}>
                    </Item>
                    <hr></hr>
                    <Item itemId="39" name="Roast Pork Lo Mein" price={13.99} smallPrice={8.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="40" name="Chicken Lo Mein" price={13.99} smallPrice={8.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="41" name="Beef Lo Mein" price={13.99} smallPrice={8.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="42" name="Shrimp Lo Mein" price={13.99} smallPrice={8.55}>
                    </Item>
                    <hr></hr>
                    <Item itemId="43" name="House Special Lo Mein" price={14.99} smallPrice={8.95}>
                        Contains Chicken, Pork, and Shrimp
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Mei Fun">
                    <Item itemId="45" name="Roast Pork Mei Fun" price={lgMeiFun} smallPrice={smMeiFun}>
                    </Item>
                    <hr></hr>
                    <Item itemId="46" name="Chicken Mei Fun" price={lgMeiFun} smallPrice={smMeiFun}>
                    </Item>
                    <hr></hr>
                    <Item itemId="47" name="Beef Mei Fun" price={lgMeiFun} smallPrice={smMeiFun}>
                    </Item>
                    <hr></hr>
                    <Item itemId="48" name="Shrimp Mei Fun" price={lgMeiFun} smallPrice={smMeiFun}>
                    </Item>
                    <hr></hr>
                    <Item itemId="49" name="House Special Mei Fun" price={lgMeiFun} smallPrice={smMeiFun}>
                        Contains Chicken, Pork, and Shrimp
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Vegetable">
                    <Item itemId="120" name="Broccoli w. Garlic Sauce" price={13.25} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="121" name="Sauteed Broccoli" price={13.25} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="122" name="Bean Curd Szechuan Style" price={15.25} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="123" name="Vegetable Delight" price={13.25} displaySizes={true}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Egg Foo Young">
                    <Item itemId="56" name="Vegetable Egg Foo Young" price={eggFooYoung} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="57" name="Roast Pork Egg Foo Young" price={eggFooYoung} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="58" name="Chicken Egg Foo Young" price={eggFooYoung} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="59" name="Beef Egg Foo Young" price={eggFooYoung} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="60" name="Shrimp Egg Foo Young" price={eggFooYoung} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="60" name="House Special Egg Foo Young" price={eggFooYoung} displaySizes={true}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Pork">
                    <Item itemId="61" name="Sweet & Sour Pork" smallPrice={smPorkChicken} price={lgPorkChicken}>
                    </Item>
                    <hr></hr>
                    <Item itemId="62" name="Moo Shu Pork" price={19.99} displaySizes={true}>
                        Includes 5 Pancakes
                    </Item>
                    <hr></hr>
                    <Item itemId="63" name="Shredded Pork w. Garlic Sauce" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="64" name="Shredded Pork w. Peking Sauce" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="65" name="Roast Pork w. Mushroom" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="66" name="Roast Pork w. Broccoli" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="67" name="Roast Pork w. Snow Peas" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="68" name="Roast Pork w. Chinese Veg" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="69" name="Roast Pork w. Mixed Veg" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Chicken">
                    <Item itemId="70" name="Sweet & Sour Chicken" smallPrice={smPorkChicken} price={lgPorkChicken}>
                    </Item>
                    <hr></hr>
                    <Item itemId="71" name="Moo Shu Chicken" price={19.99} displaySizes={true}>
                        Includes 5 Pancakes
                    </Item>
                    <hr></hr>
                    <Item itemId="72" name="Kung Po Chicken" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="73" name="Chicken w. Cashews" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="74" name="Szechuan Chicken" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="75" name="Hunan Chicken" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="76" name="Shredded Chicken w. Hot Spicy" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="79" name="Diced Chicken and Shrimp" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="80" name="Curry Chicken w. Onion" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="81" name="Chicken w. Garlic Sauce" price={lgPorkChicken} displaySizes={true} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="82" name="Chicken w. Mixed Veg" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="83" name="Chicken w. Mushroom" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="85" name="Chicken w. Snow Peas" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="86" name="Chicken w. Broccoli" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="87" name="Moo Goo Gai Pan" price={lgPorkChicken} displaySizes={true}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Beef">
                    <Item itemId="88" name="Pepper Steak w. Onion" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="89" name="Beef w. Chinese Veg" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="90" name="Beef w. Broccoli" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="91" name="Beef w. Snow Peas" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="92" name="Beef w. Oyster Sauce" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="93" name="Beef w. Mushroom" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="94" name="Curry Beef w. Onion" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="95" name="Beef w. Mixed Veg" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="96" name="Shredded Beef w. Hot Spicy" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="97" name="Beef w. Garlic Sauce" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="98" name="Szechuan Beef" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="99" name="Hunan Beef" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="99a" name="Moo Shu Beef" price={19.99} displaySizes={true}>
                        Includes 5 Pancakes
                    </Item>

                </CategoryDropdown>
                <CategoryDropdown title="Shrimp">
                    <Item itemId="100" name="Moo Shu Shrimp" price={19.99} displaySizes={true}>
                        Includes 5 Pancakes
                    </Item>
                    <hr></hr>
                    <Item itemId="101" name="Baby Shrimp w. Cashews" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="102" name="Baby Shrimp w. Peanuts" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="103" name="Shrimp w. Chinese Veg" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="104" name="Shrimp w. Lobster Sauce" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="105" name="Shrimp w. Broccoli" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="106" name="Shrimp w. Snow Peas" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="107" name="Curry Shrimp w. Onion" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="108" name="Shrimp w. Mushroom" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="110" name="Shrimp w. Mixed Veg" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="111" name="Shrimp w. Garlic Sauce" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="112" name="Szechuan Shrimp" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="113" name="Hot & Spicy Shrimp" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="114" name="Sweet & Sour Shrimp" price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="116" name="Scallops & Shrimp w. Mixed Veg" price={19.99} displaySizes={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="119" name="Hunan Shrimp" spicy={true} price={lgBeefShrimp} displaySizes={true}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Special Combination Plates">
                    <Item itemId="A1" name="Chicken Chow Mein" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A2" name="Shrimp Chow Mein" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A3" name="Roast Pork or Chicken Egg Foo Young" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A4" name="Sweet & Sour Chicken or Pork" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A5" name="Roast Pork or Chicken Lo Mein" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A6" name="Roast Pork w. Chinese Veg" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A7" name="Roast Pork Chop Suey" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A8" name="Moo Goo Gai Pan" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A9" name="Pepper Steak" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A10" name="Beef w. Broccoli" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A11" name="Chicken w. Broccoli" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A12" name="Shrimp w. Broccoli" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A13" name="General Tso's Chicken" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A14" name="Sesame Chicken" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A15" name="Chicken or Beef w. Garlic Sauce" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A16" name="Szechuan Chicken or Beef" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A17" name="Hunan Chicken or Beef" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A18" name="Hot & Spicy Chicken or Beef" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A19" name="Hot & Spicy Shrimp" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A20" name="Szechuan Shrimp" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A21" name="Shrimp w. Garlic Sauce" spicy={true} price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A22" name="Shrimp w. Chinese Veg" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A23" name="Shrimp w. Lobster Sauce" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A24" name="Shrimp & Chicken" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A25" name="Bar-B-Q Spare Ribs" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A26" name="Boneless Spare Ribs" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A27" name="Cashew Chicken" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A28" name="House Special Lo Mein" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A29" name="Shrimp or Beef Lo Mein" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A30" name="Orange Flavor Chicken" price={comboPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="A31" name="Chicken w. Mixed Veg" price={comboPrice}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Lunch Special">
                    <Item itemId="L1" name="Chicken or Pork Chow Mein" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L2" name="Chicken, Pork, or Beef Mein" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L3" name="Broccoli w. Chicken or Beef" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L4" name="Sweet & Sour Chicken or Pork" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L5" name="Chicken or Pork Egg Foo Young" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L6" name="Chicken or Beef w. Garlic Sauce" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L7" name="Kung Po Chicken" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L8" name="Szechuan Beef or Chicken" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L9" name="Tai Chien Chicken" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L10" name="Pepper Steak w. Onion" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L11" name="Vegetable Delight" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L12" name="Hot & Spicy Chicken or Beef" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L13" name="Hunan Beef or Chicken" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L14" name="Broccoli w. Garlic Sauce" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L15" name="Pork or Beef w. Chinese Veg" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L16" name="Crabmeat Beef w. Mixed Veg" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L17" name="Chicken or Beef w. Mixed Veg" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L18" name="Chicken w. Cashew Nuts" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L19" name="Chicken w. Snow Peas" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L20" name="Moo Goo Gai Pan" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L21" name="Sesame Chicken" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="L22" name="General Tso's Chicken" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S1" name="Shrimp w. Broccoli" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S2" name="Shrimp Lo Mein" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S3" name="Chicken w. Baby Shrimp" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S4" name="Triple Delight" price={lunchPrice}>
                        Contains Shrimp, Chicken, and Pork
                    </Item>
                    <hr></hr>
                    <Item itemId="S5" name="Szechuan Shrimp" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S6" name="Shrimp w. Lobster Sauce" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S7" name="Hot & Spicy Shrimp" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S8" name="Baby Shrimp w. Garlic Sauce" spicy={true} price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S9" name="Crabmeat, Baby Shrimp w. Lobster Sauce" price={lunchPrice}>
                    </Item>
                    <hr></hr>
                    <Item itemId="S10" name="Shrimp w. Mixed Veg" price={lunchPrice}>
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Chef's Specialties">
                    <Item itemId="H1" name="Happy Family" price={19.25}>
                        Fresh shrimp, crawfish, chicken, roast pork, and beef, w. broccoli, baby corn, mixed vegetables in brown sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H2" name="Seafood Delight" price={19.25}>
                        Crawfish, jumbo shrimp, scallop, and crabmeat, w. mixed chinese vegetables in white sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H3" name="Double Delight w. Cashews" price={19.25}>
                        Chicken & Shrimp w. cashews.
                    </Item>
                    <hr></hr>
                    <Item itemId="H4" name="Triple Hunan Delight" price={18.35} spicy={true}>
                        Chicken, shrimp, beef, broccoli, with mixed vegetables including baby corn, in a hot and spicy Hunan Sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H5" name="General Tso's Chicken" price={16.99} spicy={true}>
                        Fried chunks of chicken in a golden spicy sauce along with steamed broccoli.
                    </Item>
                    <hr></hr>
                    <Item itemId="H6" name="Four Season" price={19.25}>
                        Fresh shrimp, chicken, beef, roast pork, broccoli, snow peas, baby corn, along with other vegetables in brown sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H7" name="Triple Crown" price={18.35}>
                        Fresh shrimp, chicken, roast pork, broccoli, chinese vegetables in brown sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H8" name="Beef & Scallops" price={19.95}>
                        Beef and Scallops along with broccoli and other mixed vegetables including snow peas in brown sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H9" name="Sesame Shrimp" price={19.99} spicy={true}>
                        Fried battered shrimp in a golden Szechuan sesame sauce along with steamed broccoli.
                    </Item>
                    <hr></hr>
                    <Item itemId="H10" name="Sesame Chicken" price={16.99} spicy={true}>
                        Fried chunks of chicken coated in a golden spicy sauce along with steamed broccoli, sprinked with roasted sesame.
                    </Item>
                    <hr></hr>
                    <Item itemId="H11" name='Hawaiian Five "O"' price={19.99}>
                        Crawfish, shrimp, chicken, scallops, roast pork, and mixed vegetables.
                    </Item>
                    <hr></hr>
                    <Item itemId="H12" name="Seafood Delight in Hot Sauce" spicy={true} price={19.25}>
                        Crawfish, jumbo shrimp, scallop, and crabmeat, w. mixed chinese vegetables in Szechuan sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H14" name="Shrimp & Scallops w. Szechuan Sauce" price={19.99} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="H16" name="Chicken w. Orange Flavor" price={16.99}>
                        Fried chunks of chicken in a golden sweet sauce with a touch of mandarin orange peel flavor along with steamed broccoli.
                    </Item>
                    <hr></hr>
                    <Item itemId="H17" name="Triple Delight w. Garlic Sauce" price={18.35} spicy={true}>
                        Chicken, shrimp, beef, with mixed vegetables in a hot and spicy garlic Sauce.
                    </Item>
                    <hr></hr>
                    <Item itemId="H18" name="Triple Sweet & Sour" price={17.99}>
                        Sweet & Sour Chicken, Pork, and Shrimp.
                    </Item>
                    <hr></hr>
                    <Item itemId="H19" name="Mongolian Beef or Chicken" price={17.99} spicy={true}>
                    </Item>
                    <hr></hr>
                    <Item itemId="H20" name="Hunan Double Delight" price={19.99} spicy={true}>
                        Hunan Beef & Hot and Spicy Shrimp
                    </Item>
                </CategoryDropdown>
                <CategoryDropdown title="Extras">
                    <Item name="White Rice" smallPrice={3} price={4.95}>
                    </Item>
                    <hr></hr>
                    <Item name="Cripsy Noodles" price={0.75}>
                    </Item>
                    <hr></hr>
                    <Item name="Fortune Cookies (3)" price={0.3}>
                    </Item>
                </CategoryDropdown>
            </div>
        </>
    );
}

export default Accordion;
