import {React,useState}  from "react";
import Button from "./Button";

//Creates a counter component that takes a starting parameter, usually Zero.  Has buttons to handle increments.
// call as: <Counter count={0} />

const Counter = ({count}) => {
    const [orderCount, setOrderCount] = useState(count)

    //logic to limit order range 0-30
    {if(orderCount < 0){setOrderCount(0)}}
    {if(orderCount > 30){setOrderCount(30)}}

    const handleDecrement = () => {        
        setOrderCount(prevCount => prevCount - 1);
    }

    const handleIncrement = () => {
        setOrderCount(prevCount => prevCount + 1);
    }

    return (
        <div className="Controls">
            <Button text='-' func={handleDecrement}/>
            <h2>{orderCount}</h2>
            <Button text='+' func={handleIncrement}/>
        </div>
    )
}

export default Counter;