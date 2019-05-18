import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers}, 
                () => console.log("Customers Fetched...", this.state.customers)))
            .catch(error => {
                console.log(error);
            }); 
    }

    render(){
        return(
            <div id="customers-div">
                <h2> Customers </h2>
                <ul>
                    {this.state.customers.map(customer => 
                        <li key={customer.id}> {customer.firstname} {customer.lastname} </li>)}
                </ul>
            </div>
        );
    }
}

export default Customers;
