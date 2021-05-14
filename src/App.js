import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state={
      count:0
    }
   // this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter = () => {
    this.setState({count: this.state.count+1});  
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.updateCounter}>Incrementa</button>
      </div>
    );
  }


}

export default App;
