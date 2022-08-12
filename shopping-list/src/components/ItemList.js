function ItemList({items, addItem}) {

    return (
        <section className="item-list">
        <h2>Here is your available items</h2>
        <ul>
            {items.map((item, index) => {

                return (
                    
                    <li key= {index} >
                        {item}
                        <button onClick={() => {addItem(item)}}>+</button>
                    </li>
                )
            })}
        </ul>
        </section>
    );
};


export default ItemList;