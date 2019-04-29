import React , { Component} from "react";
import Calculators from './Calculator';
import ProductList from '../product/ProductList';

class Monitor extends Component{

    constructor(props){
        super(props);
        this.state = {totalPrice: 0 , orders: [] };
    }

    addOrders(){
        let findOrder = this.state.orders.find(orders => order.product.productId == product.productId);
        if (findOrder){
            findOrder = findOrder+1;
        }
        else{
            this.state.orders.push( {product: product , quantity : 1 } )
        }

        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice :totalPrice , orders : this.state.orders});
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrders}/>
                    </div>
                    <div className="col-md-3">

                    {/* ให้มันส่งค่า totalPrice , orders ไปให้หน้า Calculator */}
                        <Calculators totalPrice={this.state.totalPrice} orders={this.state.orders}/> 
                    </div>

                </div>

            </div>

        )
    }

}

export default Monitor;