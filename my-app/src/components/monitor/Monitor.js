import React , { Component} from "react";
import Calculators from './Calculator';
import ProductList from '../product/ProductList';

class Monitor extends Component{

    constructor(props){
        super(props);
        this.state = {totalPrice: 0 , orders: [] };
        this.addOrders = this.addOrders.bind(this); //ใส่ไว้เพื่อบอกว่าเวลาเรียกให้มันเรียก obj ของตัวนี้เท่านั้น
        this.delOrder = this.delOrder.bind(this); //ใส่ไว้เพื่อบอกว่าเวลาเรียกให้มันเรียก obj ของตัวนี้เท่านั้น
        this.cancelOrder = this.cancelOrder.bind(this);
    }

    addOrders(product){
        // ดึงข้อมูลจากตัว state ว่ามีการซื้อยัง?
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        //เช็คว่าเจอมั้ย? ถ้าเจอเพิ่ม quantity
        if (findOrder){
            findOrder.quantity++;
        } 
        else{ //ถ้าไม่เจอเพิ่มสินค้า และเซตว่า มีจำนวน1 เพราะเป็นอันแรก
            this.state.orders.push( {product: product , quantity : 1 } )
        }


        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({totalPrice :totalPrice , orders : this.state.orders});
    }

    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId != product.productId);
        //ลบแล้วจะเหลือตัวที่เหลือจากลบไปแล้ว
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({totalPrice:totalPrice, orders : resultOrder});
    }

    cancelOrder(){
        this.setState( {totalPrice : 0, orders : [] })
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
                        <Calculators totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder}  onCancelOrder={this.cancelOrder} /> 
                    </div>

                </div>

            </div>

        )
    }

}

export default Monitor;