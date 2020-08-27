import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import './App.css';
//import PropTypes from 'prop-types';

class App extends Component {

  getStyle = () => {
    return {
      fontSize: '3vw',
      backgroundColor: '#000',
      color: '#fff'
    }
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>The Random Beer App</h1>
          <p>
            If true love had a taste, it would be a cold beer.
          </p>
          <p>
          <button type="button" class="btn btn-secondary" style={ this.getStyle() }>
          Get Random Beer
          </button>
          </p>
        </Jumbotron>
      </div>
    );
  }  
}

export default App;
