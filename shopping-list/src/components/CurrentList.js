import { useState } from "react";

export default function CurrentList ({list}) {

    const [listClass, setClass] = useState('items')
    function handleClick(event) {
        console.log(event);
        setClass('strike')
    };

    return ( 
        <>
            {list.map((item, index) => {
            return (
                <li key={index} className= {listClass}>
                    {item}
                    <button onClick={() => handleClick()} className="strike-button">x</button>
                </li>
                );
            })}
        </>
    );
};