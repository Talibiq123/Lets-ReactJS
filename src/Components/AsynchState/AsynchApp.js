import React, {useState} from "react";

function AsynchApp() {
    let [count, setCount] = useState(0);

    // function increase1() {
    //     setCount(count + 1); // Asymch Process
    //     setCount(count + 1);
    //     console.log(count);
    // }

    function increase2() {
        setCount(count => count + 1); // Asymch Process
        setCount(count => count + 1);
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