import React from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Wizard from './components/Wizard/Wizard'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Header />
      {routes}
      


    </div>
  );
}

export default App;
