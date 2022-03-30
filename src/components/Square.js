import React from "react";
import './styles/Square.css';

function Square(props) {
    return (
        <button className="square" onClick={props.edit}>
            {props.value}
        </button>
    )
}

export default Square;