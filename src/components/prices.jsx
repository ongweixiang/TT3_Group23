import React, { Component } from 'react';
import ApiService from '../services/apiServices';

class Prices extends Component {
    state = {
        currentPrice: 0
    }

    constructor() {
        super();
        this.viewPrices = this.viewPrices.bind(this);
    }

    render() { 
        return (  
            <div>
                <button onClick={this.viewPrices}>view Prices</button>
            </div>
        );
    }

    viewPrices() {
        console.log("Retrieving Prices......");
        ApiService.currentPricingOfAsset().then(
            (response) => response.json())
            .then((response) => {
                this.setState({
                    currentPrice: response.price,
                })
            .then((response) => {
                console.log(response)
            })
            });
        console.log(this.state.currentPrice);
    }


}
 
export default Prices;