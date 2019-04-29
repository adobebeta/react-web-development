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
        console.log("constructor");

    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(),1000);
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    tick(){
        // this.state = {date : new Date()}; เปลี่ยนแบบนี้ไม่ได้
        this.setState({date : new Date()});
    }

    //ตัวนาฬิกา
    render(){
        const style = {height : 70, marginTop : 10};

        return (
            <div className="container-fluid">
                <div className="row">
                    
                    {/* cloumn left */}
                    <div className="col-md-8 text-left">
                        <h1 className="text-success"> <img style={style}  src="/images/logo/logo.png" alt="" /> เฮลตี้คาเฟ่</h1>
                    </div>

                    {/* column right */}
                    <div className="col-md-4 text-right">
                    <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
                <hr />
            

            </div>
        )
    }
}

 export default Header;