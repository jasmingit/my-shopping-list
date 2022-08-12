export default function Suggested ({items, addItem, setItems}) {
    let newItems = []
    function removeItem(item) {
        
        newItems = items.filter((element) => {
            // console.log(element, item)
            if (element !== item){
                return element
            }
        }) 
        console.log(newItems)
        setItems(newItems)
        
    }
    // console.log(newItems, items)
    return (
        <>
            {items.map((item, index) => {
                return (
                    <li key= {index} className="items">
                        {item}
                        <button onClick={() => {addItem(item)}} className="add-button">+</button>
                        <button onClick={() => {removeItem(item)}} className ="delete-button">-</button>
                    </li>
                );
            })}
        </>
    );
};