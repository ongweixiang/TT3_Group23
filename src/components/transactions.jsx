import React, { Component } from 'react';
import UserService from './viewTransactionsService';

class Transactions extends Component {
    state = {  }

    render() { 
        return (  
            <div>
                <button onClick={this.viewTransaction}>View Your Transaction History</button>
            </div>
        );
    }

    viewTransaction() {
        console.log("Retrieving Transactions......");
        UserService.getTransactions()
            .then((response) => response.json())
            .then(response => {console.log(response)})
        return;
    }

}
 
export default Transactions;