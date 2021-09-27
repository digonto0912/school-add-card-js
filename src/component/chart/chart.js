import React from 'react';
import "./chart.css";

// chart component
const Chart = (props) => {

    // destructure
    const {cart} = props;

    // total
    let total = 0;
    
    // total for loop
    for(const clickedCardsInfo of cart){
        total = total + clickedCardsInfo.price;
    }
    

    return (
        // chart div
        <div className="chart">
        
            {/* all total */}
            <h3>Total Add : {cart.length}</h3>
            <h3>Total price : {total}</h3>

            {/* names div */}
            <div className="clickedCardsName">
            {
            cart.map(clickedCardsInfo=> <li>{clickedCardsInfo.name}</li>)
            }
            </div>

        </div>
    );
};

export default Chart;