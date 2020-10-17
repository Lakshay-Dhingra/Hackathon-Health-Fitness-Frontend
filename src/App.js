import React, { Component } from 'react';

import Main from './Components/MainComponent';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {ConfigStore} from './redux/ConfigureStore'

import './App.css';

const store=ConfigStore()
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter> 
      </Provider> 
    );
  }
}

export default App;
