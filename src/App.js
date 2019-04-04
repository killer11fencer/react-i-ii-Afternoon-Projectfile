import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Mainbody">
        <div className="App">
          <header className='Home'>Home</header>
        </div>
        <div className="body">
          <Wrapper />
        </div>
      </div>
    );
  }
}

export default App;
