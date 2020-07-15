import React from "react";
import Chart from "./Chart";
import {useParams} from 'react-router-dom'

const Charts = ({ coinData }) => {
  const params = useParams()
  console.log(params.graph);
  
  if(params.graph === undefined) {
    return (
      <div className="charts">
        {coinData.map(coin => (
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="charts">
        {coinData.filter(coin => {
          return coin.id === params.graph
        }).map(coin => (
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        ))}
      </div>
    );
  }
  
};
export default Charts;
