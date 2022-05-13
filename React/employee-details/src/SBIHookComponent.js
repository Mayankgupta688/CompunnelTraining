import { useEffect, useState } from "react";
import Axios from "axios";

export function StockComponent(props) {

    var [stockData, setStockData] = useState({
        stockPrice: 0,
        stockPriceChange: 0,
        stockColor: "green",
        stockName: ""
    });

    useEffect(() => {
        setInterval(() => {
            Axios.get(props.stockData.stockUrl).then((response) => {
                if(response.data.data.pricecurrent >= stockData.stockPrice) {

                    setStockData({
                        stockPrice: response.data.data.pricecurrent,
                        stockPriceChange: response.data.data.pricechange,
                        stockColor: "green",
                        stockName: response.data.data.NSEID
                    })

                } else {
                    
                    setStockData({
                        stockPrice: response.data.data.pricecurrent,
                        stockPriceChange: response.data.data.pricechange,
                        stockColor: "red",
                        stockName: response.data.data.NSEID
                    })
                }
            })
        }, 1000);
    })
    return (
        <div className="card" style={{width: "18rem", display: "inline-block", padding: "10px", margin: "10px", color: stockData.stockColor}}>
            <img src={stockData.stockImage} className="card-img-top" alt="..." style={{height: "150px"}}/>
            <div className="card-body">
                <h5 className="card-title">{stockData.stockName}: {stockData.stockPrice}</h5>
                <p className="card-text">
                    <h6>Price Change: {stockData.stockPriceChange}</h6>
                </p>
                <input type="button" value="Delete" />
            </div>
        </div>
        
    )
}