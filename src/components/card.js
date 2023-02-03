import React from "react";
import './card.css'

const Card = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.img} alt="/aw" className="puuu"/>
        </div>
    );
};
export default Card;