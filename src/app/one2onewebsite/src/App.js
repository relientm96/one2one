import React from 'react';
import logo from './logo.svg';
import './App.css';

import Customers from './components/customers/customers'
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard/>
      </header>
    </div>
  );
}

export default App;
