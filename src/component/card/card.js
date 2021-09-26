import React from 'react';
import "./card.css";

const Card = (props) => {
    const {img, name, price, totalStudent, title, reating} = props.info;
    return (
        <div className="card">
            <img src={img}/>

            <h5>Name: {name}</h5>
            <h5>Price: {price}</h5>
            <h5>Total Student: {totalStudent}</h5>
            <h5>Title: {title}</h5>
            <h5>Reating: {reating}</h5>

            <button onClick={ () => addToCard(props.info)}>add</button>
        </div>
    );
};

export default Card;