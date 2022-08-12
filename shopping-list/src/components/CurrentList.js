export default function CurrentList ({list, items, setItems}) {
  function handleClick(item){
    setItems([item,...items])
  }
    return ( 
        <>
            {list.map((item, index) => {
            return (
                <li key={index} className= "items">
                    {item}
                    <input type="checkbox"></input>
                    <button className=".heart-button" onClick={() => handleClick(item)} >❤️</button>
                </li>
                );
            })}
        </>
    );
};