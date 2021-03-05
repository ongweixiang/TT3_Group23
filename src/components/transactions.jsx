import React, { Component } from 'react';
import ApiService from '../services/apiServices';

class Transactions extends Component {
    state = {
        transactionHistory: 0
    }

    constructor() {
        super();
        this.viewTransactions = this.viewTransactions.bind(this);
        this.viewTransactions();
        // console.log(this.state.transactionHistory);
    }

    render() { 
        return ( 
            <div>
                <button >View Transactions</button>
            </div>
         );
    }

    viewTransactions() {
        console.log("Retrieving Transactions......");
        ApiService.pastTransactions("f4481c86-1a64-49a7-b85c-3d4449eabf69")
            .then(
                (response) => response.json()
            )
            // .then(
            //     (response) => console.log(response)
            // )
            .then(
                (response) => {
                    this.setState({
                        transactionHistory: response,
                    })
                }
            )
    }
}
 
export default Transactions;



