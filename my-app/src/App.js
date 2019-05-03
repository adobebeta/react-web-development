import React, { Component } from 'react'; 
import Footer from "./components/footer";
import Header from './components/header';
import Monitor from './components/monitor/Monitor';
import axios from 'axios';

import Header2 from './components/header2';
import './App.css';

//Class components
class App extends Component{

  constructor(props){
    super(props);
    this.state = {products: ""};
  }

  // โหลดข้อมูลสินค้า เมื่อเปิดขึ้นมา  จากไฟล JSON
  componentDidMount(){
    // วิธีที่ 1
  //   this.setState({products : [
  //     { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
  //     { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
  //     { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
  //     { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
  //     { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
  //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  // ]})

  // วิธีที่ 2 เรียกใช้ข้อมูลออกมา
  // fetch("http://localhost:3001/products", { method :"GET"})
  // .then(res => res.json())
  // .then(res => { this.setState( {products : res})})
  // // .then(res => {console.log(res)})

  // วิธีที่ 3 Axios
    axios.get("http://localhost:3001/products" ).then(res =>{
      console.log(res.data);
      {this.setState( {products : res.data})}
    });


  }



  render() {
    return (
    <div className="title">  
      <Header />
      {/* <Header2 /> */}
      
      <Monitor products = {this.state.products} />

      <Footer company="zoommo" email="adobebeta1997@gmail.com"/>

    </div>
  );
}
}

export default App;
