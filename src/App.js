import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>The Random Beer App</h1>
        <p>
          If true love had a taste, it would be a cold beer.
        </p>
        <p>
          <Button className="random_button">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
