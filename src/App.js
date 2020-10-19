import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard';


function App() {
 
  return (
    <Router>

    <div className="App">
    <Route component={Dashboard}/>
    </div>
    </Router>

  );
}

export default App;
