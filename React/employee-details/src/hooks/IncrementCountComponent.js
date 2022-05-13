import { useEffect, useState } from "react";
export function IncrementCountComponent() {

    debugger;
    
    var [counter, setCounter] = useState(0);
    var [incrementCounter, setIncrementCounter] = useState(0);

    useEffect(function() {
        debugger;
        setInterval(function() {
            // setIncrementCounter(incrementCounter => incrementCounter + 1)
        }, 1000);
    }, [])

    useEffect(function() {
        debugger;
        console.log("Component Refreshed....")
    })

    useEffect(function() {
        debugger;
        console.log("Component Refreshed....")
    }, [counter])

    function incrementValue() {
        setCounter(counter => counter + 1)
    }
    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            <h1>Counter Value is: {incrementCounter}</h1>
            <input type="button" value="Increment" onClick={incrementValue} />
        </div>
    )
}