import { useState } from "react";

export default function Form ({addItem}) {

    const [itemInput, setItemInput] = useState('');

    const handleChange = (event) => {
        setItemInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(itemInput);
        setItemInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="item-input">Item:</label>
            <input type="text" id="item-input" onChange={handleChange} value={itemInput}/>
            <button className="submit-button">submit</button>
        </form>
    );
};