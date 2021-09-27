import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./card.css";

const Card = (props) => {

    // destructure
    const {img, name, price, totalStudent, title, reating, key} = props.info;

    // icon
    const element = <FontAwesomeIcon icon={faCoffee} />

    return (
        // card div
        <div className="card">
            {/* card image */}
            <img src={img}/>

            {/* card info. */}
            <h5>Name: {name}</h5>
            <h5>Price: {price}</h5>
            <h5>Total Student: {totalStudent}</h5>
            <h5>Title: {title}</h5>
            <h5>Reating: {reating}</h5>

            {/* card button */}
            <button onClick={ () => props.addToCard(props.info)}>
                {element}add
            </button>
        </div>
    );
};

export default Card;