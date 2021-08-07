import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector'
import Circles from './components/Circles/Circles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      circleSelected : '1'
    };
  }

circleSelectedHandler = (circleSelected) => {
  this.setState({circleSelected})
}


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
          circleSelected = {this.state.circleSelected}
          buttonChosenHandler = {this.circleSelectedHandler}/>
          <Circles
          buttonChosen = {this.state.circleSelected}/>
        </main>
      </div>
    );
  }
}

export default App;
