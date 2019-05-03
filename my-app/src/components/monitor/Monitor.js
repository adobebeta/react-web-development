import React, { Component } from "react";
import Calculators from './Calculator';
import ProductList from '../product/ProductList';
import Axios from "axios";

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = { totalPrice: 0, orders: [] , confirm : false , msg : ''};
        this.addOrders = this.addOrders.bind(this); //ใส่ไว้เพื่อบอกว่าเวลาเรียกให้มันเรียก obj ของตัวนี้เท่านั้น
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrders(product) {
        // ดึงข้อมูลจากตัว state ว่ามีการซื้อยัง?
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        //เช็คว่าเจอมั้ย? ถ้าเจอเพิ่ม quantity
        if (findOrder) {
            findOrder.quantity++;
        }
        else { //ถ้าไม่เจอเพิ่มสินค้า และเซตว่า มีจำนวน1 เพราะเป็นอันแรก
            this.state.orders.push({ product: product, quantity: 1 })
        }


        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({ totalPrice: totalPrice, orders: this.state.orders  ,confirm : false });
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId != product.productId);
        //ลบแล้วจะเหลือตัวที่เหลือจากลบไปแล้ว
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({ totalPrice: totalPrice, orders: resultOrder ,confirm : false});
    }

    confirmOrder() {
        const { totalPrice, orders } = this.state;
        if (orders && orders.length > 0){
        Axios.post("http://localhost:3001/orders", { orderDate: new Date, totalPrice, orders })
            .then(res => {
                this.setState({ totalPrice: 0, orders: [] ,confirm:true ,msg : 'บันทึกรายการสั่งซื้อเรียบร้อยแล้วค่ะ' } )
            })
        }else{
            this.setState({ totalPrice: 0, orders: [] ,confirm:true ,msg : 'เลือกสินค้าก่อนค่ะ ' } )
            
        }
    }

    cancelOrder() {
        this.setState({ totalPrice: 0, orders: [] ,confirm:false })
    }


    render() {
        return (
            <div className="container-fluid">
               {/* alert */}
               {this.state.confirm &&  
                <div className="alert alert-secondary title text-right" role="alert">
                {this.state.msg}
                </div>
               }

                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrders} />
                    </div>
                    <div className="col-md-3">

                        {/* ให้มันส่งค่า totalPrice , orders ไปให้หน้า Calculator */}
                        <Calculators totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
                    </div>

                </div>

            </div>

        )
    }

}

export default Monitor;