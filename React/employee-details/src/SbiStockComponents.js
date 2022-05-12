import React from "react";
import Axios from "axios";

export class SbiStockComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            stockArray: [
                "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC",
                "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI"
            ]
        }
    }

    render() {
        return (
            <div>
                <InvisualStockComponent stockUrl={this.state.stockArray[0]} />
                <InvisualStockComponent stockUrl={this.state.stockArray[1]} />
            </div>
            
        )
    }

    
}

export default class InvisualStockComponent extends React.Component {
    constructor() {
        super();
        
    }

    componentDidMount() {
        debugger;

        setInterval(() => {
            Axios.get(this.props.stockUrl).then((response) => {
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

    render() {
        return 
    }
}