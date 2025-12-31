import "./Item.css";

interface Props {
    children?: string;
    itemId: string;
    name: string;
    price: number;
    smallPrice?: number;
    displaySizes?: boolean;
}

function Item({
    itemId,
    name,
    price,
    smallPrice,
    displaySizes = false,
    children,
}: Props) {
    return (
        <div className="item">
            <div className="item-top">
                <strong>
                    {itemId}. {name}
                </strong>
                <div className="dots"></div>
                <strong className="price">
                    {smallPrice ? (
                        <>
                            <span className="price-sm">
                                (Sm.) ${smallPrice.toFixed(2)}
                            </span>
                            <span className="price-lg">
                                (Lg.) ${price.toFixed(2)}
                            </span>
                        </>
                    ) : displaySizes ? (
                        <span className="price-lg">
                            (Lg.) ${price.toFixed(2)}
                        </span>
                    ) : (
                        `$${price.toFixed(2)}`
                    )}
                </strong>
            </div>
            {children}
        </div>
    );
}

export default Item;
