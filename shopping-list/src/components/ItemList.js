import Suggested from './Suggested';
import Form from './Form';

function ItemList({items, addItem}) {

    return (
        <section className="item-list">
            <h2>Add Items To Your Shopping List</h2>
                <Form addItem = {addItem}/>
            <h2 className="list-header">Suggested Items</h2>
            <ul>
               <Suggested items = {items} addItem = {addItem}/>
            </ul>
        </section>
    );
};


export default ItemList;