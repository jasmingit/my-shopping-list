export default function ResetList ({setList}) {

    const handleClick = () => {
        setList(["Your List is Empty"]);
    };;

    return (
        <>
            <button onClick={handleClick}>Reset</button>
        </>
    );
};