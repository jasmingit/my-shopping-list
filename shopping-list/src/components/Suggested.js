export default function Suggested ({items, addItem}) {
    return (
        <>
            {items.map((item, index) => {
                return (
                    <li key= {index} className="items">
                        {item}
                        <button onClick={() => {addItem(item)}} className="add-button">+</button>
                    </li>
                );
            })}
        </>
    );
};