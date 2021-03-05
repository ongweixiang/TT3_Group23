import React, { Component } from 'react';
import ApiService from '../services/apiServices';

class Transactions extends Component {


    constructor(props) {
        super(props);

        this.viewTransactions = this.viewTransactions.bind(this);

        this.state = {
            transactionHistory: [],
        };
        var retrievedObject = localStorage.getItem('login_JSON');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));

        ApiService.pastTransactions("f4481c86-1a64-49a7-b85c-3d4449eabf69")
            .then(
                (response) => response.json()
            )
            .then(
                (response) => {
                    this.setState({
                        transactionHistory: response,
                    });
                }
            )
        
    }
    render() { 
        return ( 
            <div>
                {this.viewTransactions()}
            </div>
         );
    }

    

    viewTransactions() {
        console.log(this.state.transactionHistory);
        return (
            <table>
                <tr>
                    <th>Order Type</th>
                    <th>TimeStamp</th>
                    <th>Asset Amount</th>
                    <th>Asset Symbol</th>
                    <th>Asset Price</th>
                    <th>Cash Amount</th>
                    <th>Transaction Id</th>
                </tr>
                {
                    this.state.transactionHistory.map(
                        (transaction) => (
                            <tr>
                                <td>{transaction.orderType}</td>
                                <td>{this.timeConverter(transaction.timestamp)}</td>
                                <td>{transaction.assetAmount}</td>
                                <td>{transaction.assetSymbol}</td>
                                <td>{transaction.assetPrice}</td>
                                <td>{transaction.cashAmount}</td>
                                <td>{transaction.transactionId}</td>
                            </tr>
                        )
                    )
                }
            </table>
        )

    }

    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }

      

}
 
export default Transactions;



