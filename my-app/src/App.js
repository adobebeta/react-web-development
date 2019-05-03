import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        {/* mapระหว่าง URL กับ Component ของมัน */}
        {/* ต้องเป็น exactเท่านั้น ถึงจะเข้าหน้านี้ได้ */}
        <Route exact path="/" component={Home} /> 
        <Route path="/about" component={About} />
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
