import { useState } from "react";

function itemSelector () {

    const [list, setList] = useState("Your List is Empty!")

    // const addItem = () => {
    //     setList("oranges");
    // };

    // return (
    //     <main>
    //         <p>{list}</p>
    //         <button onCLick={addItem}>Add oranges</button>
    //     </main>
    // );
};

export default itemSelector;