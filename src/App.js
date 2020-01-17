import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <Navbar/>
            <Search/>
          </div>
          
        </MuiThemeProvider>
      )
  }
  
}

export default App;
