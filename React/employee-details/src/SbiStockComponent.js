import React from "react";
import Axios from "axios";

export class SbiStockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            sbiStockPrice: 0,
            sbiStockPriceChange: 0,
            stockColor: "green"
        }
    }

    render() {
        return (
            <div style={{color: this.state.stockColor}}>
                <h1>Current Price is: {this.state.sbiStockPrice}</h1>
                <h2>Current Price Change is: {this.state.sbiStockPriceChange}</h2>
            </div>
            
        )
    }

    componentDidMount() {
        debugger;

        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {
                if(response.data.data.pricecurrent > this.state.sbiStockPrice || response.data.data.pricecurrent === this.state.sbiStockPrice) {
                    this.setState({
                        sbiStockPrice: response.data.data.pricecurrent,
                        sbiStockPriceChange: response.data.data.pricechange,
                        stockColor: "green"
                    })
                } else {
                    this.setState({
                        sbiStockPrice: response.data.data.pricecurrent,
                        sbiStockPriceChange: response.data.data.pricechange,
                        stockColor: "red"
                    })
                }
            })
        }, 1000)
        
    }
}

export default class InvisualStockComponent extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        return 
    }
}