import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import Chart from '../chart/chart';
import "./Cards-chart.css"

const CardsChart = () => {
    const [infos,setinfos] = useState ([]);

    useEffect( () => {
        fetch('./api.JSON')
        .then(res => res.json())
        .then(data => setinfos(data))
    }, [])

    const addToCard = card =>{
        console.log("click")
    }

    return (
        <div>
            <h1 className="total-card">Total Card: {infos.length}</h1>

            <div className="col-3-1">
            <div className="card-col">
                {
                infos.map(info => <Card 
                    key={info.key}
                    info={info}
                    // img={info.img} 
                    // name={info.name} 
                    // price={info.price} 
                    // totalStudent={info.totalStudent} 
                    // title={info.title} 
                    // reating={info.reating}
                    addToCard={addToCard}></Card> )
                }
                </div>
                <div>
                    <Chart></Chart>
                </div>
            </div>
        </div>
    );
};

export default CardsChart;