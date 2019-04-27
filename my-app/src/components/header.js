import React , { Component } from 'react'
 
// Functioncal Component
// const Header = () => {
//      return <h1>HEADER</h1>
//  }

//Class Component
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
        setInterval(() => this.tick(),1000);
    }

    tick(){
        // this.state = {date : new Date()}; เปลี่ยนแบบนี้ไม่ได้
        this.setState({date : new Date()});
    }

    render(){
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

 export default Header;