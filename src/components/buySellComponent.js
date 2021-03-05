import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import ApiService from "../services/apiServices";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vTransationType = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vAmount = value => {
    if (typeof (value) === Number) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export default class BuySellComponent extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeTransactionType = this.onChangeTransactionType.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

        this.state = {
            transactionType: "SELL",
            amount: 0,
            currentPrice: 0,
            assetSymbol: "",
            currentTime: new Date(),
            successful: false,
            currentCashBalance: 0,
            currentAssetBalance: 0,
            message: ""
        };
        ApiService.currentPricingOfAsset()
            .then((response) => response.json())
            .then((response) => {
                // console.log("*********", response)
                // console.log("***", response.timestamp)
                let unix_timestamp = response.timestamp
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var date = new Date(unix_timestamp * 1000);
                this.setState({
                    currentPrice: response.price,
                    assetSymbol: response.assetSymbol,
                    currentTime: date
                });

            })
        ApiService.userBalance("f4481c86-1a64-49a7-b85c-3d4449eabf69")
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    currentCashBalance: response.cashBalance,
                    currentAssetBalance: response.assetBalance
                });
            })
    }

    onChangeTransactionType(e) {
        this.setState({
            transactionType: e.target.value
        });
    }

    onChangeAmount(e) {
        this.setState({
            amount: Number(e.target.value)
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            console.log("%%%%%")
            try {
                ApiService.buyOrSell("f4481c86-1a64-49a7-b85c-3d4449eabf69", this.state.transactionType, this.state.amount)
                    .then((response) => response.json(), error => { })
                    .then((response) => {
                        if(response.ok) {
                        console.log("Successful Transaction: ", response)
                        this.setState({
                            transactionType: "SELL",
                            amount: 0,
                        });
                        ApiService.userBalance("f4481c86-1a64-49a7-b85c-3d4449eabf69")
                            .then((response) => response.json())
                            .then((response) => {
                                this.setState({
                                    currentCashBalance: response.cashBalance,
                                    currentAssetBalance: response.assetBalance
                                });
                                ApiService.currentPricingOfAsset()
                                    .then((response) => response.json())
                                    .then((response) => {
                                        // console.log("*********", response)
                                        // console.log("***", response.timestamp)
                                        let unix_timestamp = response.timestamp
                                        // Create a new JavaScript Date object based on the timestamp
                                        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                                        var date = new Date(unix_timestamp * 1000);
                                        this.setState({
                                            currentPrice: response.price,
                                            assetSymbol: response.assetSymbol,
                                            currentTime: date
                                        });

                                    })
                            })
                        }
                        else {
                            console.log("Errorrrrr: ", response)
                        }
                    });
            }
            catch (err) {
                console.log("Error: ", err)
            }
        }
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <h3>Buy or Sell TechTrek Asset</h3>
                    <br />
                    <h4>Current Asset Balance: {this.state.currentAssetBalance}</h4>
                    <h4>Current Cash Balance: {this.state.currentCashBalance}</h4>
                    <br />
                    <h4>Asset Symbol: {this.state.assetSymbol}</h4>
                    <h4>Current Price: {this.state.currentPrice}</h4>
                    {/* <h4>Current Time: {this.state.currentTime}</h4> */}
                    <Form
                        onSubmit={this.handleRegister}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="username">Type of Transaction</label>
                                    {/* <Input
                                        type="select"
                                        className="form-control"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        validations={[required, vusername]}
                                    /> */}
                                    <select
                                        className="form-control"
                                        value={this.state.transactionType}
                                        onChange={this.onChangeTransactionType}
                                        validations={[required, vTransationType]}
                                    >
                                        <option value="BUY">Buy</option>
                                        <option value="SELL">Sell</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="amount">Amount to Transact</label>
                                    <Input
                                        type="Number"
                                        className="form-control"
                                        name="amount"
                                        value={this.state.amount}
                                        onChange={this.onChangeAmount}
                                        validations={[required, vAmount]}
                                    />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Confirm</button>
                                </div>
                            </div>
                        )}

                        {this.state.message && (
                            <div className="form-group">
                                <div
                                    className={
                                        this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}