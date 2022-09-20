// App.js
import React from 'react';
import './App.css';
import logo from './logo.svg'
import About from './About.js'

class App extends React.Component {
  render() {
    return (<>
    <div className='App-header'>
    <h1 className='App'>Eh nois</h1>
    <img src={logo} className='App-logo'></img>
    <About />
    </div>
    </>);
  }
}

export default App;
