import React, { Component } from 'react';
import Header from './Header';
import NameCard from './NameCard';
import Welcome from './Welcome';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <NameCard />
      </div>
    );
  }
}

export default App;
