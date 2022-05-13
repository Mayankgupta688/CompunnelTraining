import React, { useEffect, useState } from "react";
import Axios from "axios";

// export class StockComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             stockPrice: 0,
//             stockPriceChange: 0,
//             stockColor: "green",
//             stockName: ""
//         }
//     }

//     render() {
//         return (

//             <div className="card" style={{width: "18rem", display: "inline-block", padding: "10px", margin: "10px", color: this.state.stockColor}}>
//                 <img src={this.props.stockData.stockImage} className="card-img-top" alt="..." style={{height: "150px"}}/>
//                 <div className="card-body">
//                     <h5 className="card-title">{this.state.stockName}: {this.state.stockPrice}</h5>
//                     <p className="card-text">
//                         <h6>Price Change: {this.state.stockPriceChange}</h6>
//                     </p>
//                     <input type="button" value="Delete" />
//                 </div>
//             </div>
            
//         )
//     }

//     componentDidMount() {

//         setInterval(() => {
//             Axios.get(this.props.stockData.stockUrl).then((response) => {
//                 if(response.data.data.pricecurrent >= this.state.stockPrice) {
//                     this.setState({
//                         stockPrice: response.data.data.pricecurrent,
//                         stockPriceChange: response.data.data.pricechange,
//                         stockColor: "green",
//                         stockName: response.data.data.NSEID
//                     })
//                 } else {
//                     this.setState({
//                         stockPrice: response.data.data.pricecurrent,
//                         stockPriceChange: response.data.data.pricechange,
//                         stockColor: "red",
//                         stockName: response.data.data.NSEID
//                     })
//                 }
//             })
//         }, 1000);
//     }
// }


export function StockComponent(props) {

    var [stockData, setStockData] = useState({
        stockPrice: 0,
        stockPriceChange: 0,
        stockColor: "green",
        stockName: "null"
    });

    useEffect(() => {
        debugger;
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
    }, [])
    return (
        <div className="card" style={{width: "18rem", display: "inline-block", padding: "10px", margin: "10px", color: stockData.stockColor}}>
            <img src={props.stockData.stockImage} className="card-img-top" alt="..." style={{height: "150px"}}/>
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

export class StockContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            stockArray: [{
                    stockUrl: "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI", 
                    stockImage: "https://tse1.mm.bing.net/th?id=OIP.VYmfL-H4aG6eXLnr5HjjPQHaEh&pid=Api&P=0&w=319&h=195"
                }, {
                    stockUrl: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC", 
                    stockImage: "https://tse2.mm.bing.net/th?id=OIP.F1Q-9oXbYTEePPVsBTsRlAHaHa&pid=Api&P=0&w=167&h=167"
                }, {
                    stockUrl: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SD6", 
                    stockImage: "https://tse4.mm.bing.net/th?id=OIP.D_d8U0nl3zSi6RHX3dVw6gHaDt&pid=Api&P=0&w=333&h=166"
                }
            ]
        }
    }

    addStock = (inputStockUrl, inputImageUrl) => {
        this.setState({
            stockArray: [
                ...this.state.stockArray, {
                    stockUrl: inputStockUrl,
                    stockImage: inputImageUrl
                }]
        })
    }

    render() {
        return (
            <div>
                <h1>These are the Stock details</h1>

                <AddStockComponent addStock={this.addStock}></AddStockComponent>

                {this.state.stockArray.map((stockData) => {
                    return <StockComponent stockData={stockData}></StockComponent>
                })}
            </div>
        )
    }
}


export default class AddStockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stockUrl: "",
            stockImageUrl: ""
        }
        
    }

    updateStockUrl = (event) => {
        this.setState({
            stockUrl: event.target.value,
            stockImageUrl: this.state.stockImageUrl
        })
    }

    updateStockImageUrl = (event) => {
        this.setState({
            stockImageUrl: event.target.value,
            stockUrl: this.state.stockUrl
        })
    }

    addNotification = () => {
        this.props.addStock(this.state.stockUrl, this.state.stockImageUrl)
    }

    render() {
        return (
            <div style={{padding: "10px", margin: "10px"}}>
                <p>Enter Stock Url: <input type="text" onChange={this.updateStockUrl} value={this.state.stockUrl} /></p>
                Enter Stock Image: <input type="text" onChange={this.updateStockImageUrl} value={this.state.stockImageUrl} />
                <input type="button" value="Add" onClick={this.addNotification} />
            </div>
        )
    }
}

