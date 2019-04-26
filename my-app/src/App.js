import React, { Component } from 'react';
import Footer from "./components/footer";
import Header from './components/header';


class App extends Component{
  render() {
    return (
    <div>
      <Header />
      <Footer company="zoommo" email="adobebeta1997@gmail.com"/>
    </div>
  );
}
}

export default App;
