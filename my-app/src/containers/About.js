import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const About = () =>{
    return(
        <div>
            <Header />
            <div className="container col-md-5">
            <h3>สวัสดีครับ</h3>
            <p className="title text-jusitfy mt-4 mb-4">
                เราคือร้านอาหารจ้า
            </p>
            <h4>จากเฮลตี้ คาเฟ่</h4>
            </div>
            <Footer company="zoom" email="adobebeta1997@gmail.com"/>
        </div>
    )
}

export default About;