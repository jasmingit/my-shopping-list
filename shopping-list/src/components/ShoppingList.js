import CurrentList from "./CurrentList";
import ResetList  from "./ResetList";

function ShoppingList({list, setList}) {
    
    return (
        <section className="shopping-list">
            <h2 className="list-header">Shopping List</h2>
            <ul>
                <CurrentList list = {list}/>
            </ul>
                <ResetList setList = {setList}/>
        </section>
    );
};


export default ShoppingList;