import { useState } from "react";
import ItemList from './ItemList';
import ShoppingList from './ShoppingList';

function ItemSelector () {

    const [list, setList] = useState(["Your List is Empty!"])

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setList((currList) => {
            if ( currList[0] === "Your List is Empty!") {
                currList.pop()
            }
            return [...currList, item]
        })


    };

    return (
        <main>
            <ItemList items = {items} addItem = {addItem} setItems = {setItems}/>
            <ShoppingList list = {list} setList = {setList} items = {items} setItems = {setItems}/>
        </main>
    );
};

export default ItemSelector;