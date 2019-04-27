import React, { Component } from 'react';
import Footer from "./components/footer";
import Header from './components/header';
import ProductItem from './components/product/ProductItem';


class App extends Component{
  render() {
    return (
    <div>
      <Header />
      <ProductItem productName = "iphone x" unitPrice="20000"/>
      <ProductItem productName = "ipad pro10.5 x" unitPrice="35000"/>
      <ProductItem productName = "ipad mini x" unitPrice="19500"/>
      <Footer company="zoommo" email="adobebeta1997@gmail.com"/>

    </div>
  );
}
}

export default App;
