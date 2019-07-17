import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then(users => this.setState({users}, 
                () => console.log("Customers Fetched...", this.state.users)))
            .catch(error => {
                console.log(error);
            }); 
    }

    render(){
        return(
            <div id="customers-div">
                <h2> Users </h2>
                <ul>
                    {this.state.users.map(user => 
                        <li key={user.id}> {user.value.name} {user.value.email} </li>)}
                </ul>
            </div>
        );
    }
}

export default Customers;
