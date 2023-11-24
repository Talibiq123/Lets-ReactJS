import React from "react";
import './child.css';

function Child(props) {
    return (
        <div className="child">
            <h2>Child Component</h2>
            <button onClick={(e) => {props.useModal(true)}}>Show More</button>
        </div>
    );
}

export default Child;