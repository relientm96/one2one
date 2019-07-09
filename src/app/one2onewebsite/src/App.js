import React from 'react';
import logo from './logo.svg';
import './App.css';

import Customers from './components/customers/customers'
import Chart from './components/chart/chart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chart/>
        <Customers/>
      </header>
    </div>
  );
}

export default App;
