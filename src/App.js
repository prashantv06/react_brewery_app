import React, { Component } from 'react';
import './App.css';
import BreweryDetails from './pages/BreweryDetails';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

//let url = 'http://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d'

class App extends Component {

  render() {

    return (
            <Router> 
              <Route exact path="/" component={HomePage} />
              <Route path="/details" component={BreweryDetails} />
            </Router>  
    );
  }  
}

export default App;
