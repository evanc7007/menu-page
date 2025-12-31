import CategoryDropdown from "./CategoryDropdown";

interface Props {
    children: string;
}

function Accordion({ children }: Props) {
    return (
        <>
            <h2>{children}</h2>
            <div className="accordion" id="accordionExample">
                <CategoryDropdown title="Appetizers">Test</CategoryDropdown>
                <CategoryDropdown title="Soup">Test2</CategoryDropdown>
            </div>
        </>
    );
}

export default Accordion;
