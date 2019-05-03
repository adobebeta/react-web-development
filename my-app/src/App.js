import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        {/* mapระหว่าง URL กับ Component ของมัน */}
        <Route path="/" component={Home} /> 
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
