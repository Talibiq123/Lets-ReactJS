import React, {useState} from "react";

function AsynchApp() {
    let [count, setCount] = useState(() => { //Lazy Initialization: if u want to intialize a state with a value that is computationally 
        // expensive, then use this callbackfunction then state just initialize once
        console.log("rendered...");
        return 0
    });

    // function increase1() {
    //     setCount(count + 1); // Asynch Process
    //     setCount(count + 1);
    //     console.log(count);
    // }

    function increase2() {
        setCount(count => count + 1); // Asymch Process
        // setCount(count => count + 1);
        console.log(count);
    }


    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={increase2}>Add</button>
        </div>
    );
}

export default AsynchApp;