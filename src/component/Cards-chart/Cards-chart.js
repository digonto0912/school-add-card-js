
import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import Chart from '../chart/chart';
import "./Cards-chart.css"

// cardchart coimponent
const CardsChart = () => {

    // API loading
    const [infos,setinfos] = useState ([]);
    
    // card and chart connecting system
    const [cart,setCart] = useState ([]);

    // API loading
    useEffect( () => {
        fetch('./api.JSON')
        .then(res => res.json())
        .then(data => setinfos(data))
    }, [])

    // card and chart connecting system
    const addToCard = clickedCardsInfo =>{
        const newcards = [...cart, clickedCardsInfo];
        setCart(newcards);
    }

    return (
        <div>
            {/* total card */}
            <h1 className="total-card">Total Card: {infos.length}</h1>

            {/* card and chart div */}
            <div className="col-3-1">

                {/* card div */}
            <div className="card-col">
                {
                infos.map(info => <Card 
                    key={info.key}
                    info={info}
                    addToCard={addToCard}>
                    </Card> )
                }
                </div>

                {/* chart div */}
                <div>
                    <Chart
                    cart={cart}>
                    </Chart>
                </div>
            </div>
        </div>
    );
};

export default CardsChart;