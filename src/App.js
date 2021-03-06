import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
