import { useState } from "react";

function ShoppingList({list}) {
    const [listClass, setClass] = useState('shopping-list')
    function handleClick() {
        setClass('strike')
    }
    return (
        <section className="shopping-list">
            <h2>Shopping List</h2>
            <ul>
                
                    {list.map((item, index) => {
                        return (
                            <li key={index} className={listClass}>
                                {item}
                                <button onClick={() => handleClick()}>x</button>
                            </li>
                        )
                    })}
                
            </ul>
        </section>
    );
};


export default ShoppingList;