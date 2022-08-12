import CurrentList from "./CurrentList";
import ResetList  from "./ResetList";

function ShoppingList({list, setList, items, setItems}) {
    
    return (
        <section className="shopping-list">
            <h2 className="list-header">Shopping List</h2>
            <p id="instructions">Tick your items off or add them to your favourites!</p>
            <ul>
                <CurrentList list = {list} items = {items} setItems = {setItems}/>
            </ul>
                <ResetList setList = {setList}/>
        </section>
    );
};


export default ShoppingList;