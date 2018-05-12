import React, { Component } from 'react';
import '../../styles/app.scss';
import Navigation from '../navigation/navigation';
import Me from '../me/me';
import Work from '../work/work';
import Contact from '../contact/contact';


class App extends Component {
  
  render() { 
    return (
      <div id="app">
        <img src="logo.svg" className="logo" alt="logo"/>
        <Navigation />
        <div className="sidebar"></div>
        <Me />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
