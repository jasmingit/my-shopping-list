import { useState } from "react";
import ItemList from './ItemList';
import ShoppingList from './ShoppingList';

function ItemSelector () {

    const [list, setList] = useState(["Your List is Empty!"])

    const items = ['Bread', 'Milk', 'Eggs', 'Bacon', 'Tofu', 'Cheese', 'Onions'];

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
            <ItemList items = {items} addItem = {addItem}/>
            <ShoppingList list = {list} setList = {setList}/>
        </main>
    );
};

export default ItemSelector;