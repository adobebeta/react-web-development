import React, { Component } from 'react';
import Footer from "../../components/footer";
import Header from '../../components/header';
import axios from 'axios';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = { order: null };
    }

    componentDidMount() {
        axios.get("http://localhost:3005/orders")
            .then(res => {
                this.setState({ orders: res.data })
            })
    }

    delOrder() {
        axios.delete("http://localhost:3005/orders" + this.order.id)
            .then(res => {
                axios.get("http://localhost:3005/orders")
                    .then(res => {
                        this.setState({ order: res.data })
                    }
                    )
            })
    }

    showOrders() {
        return this.state.orders && this.state.orders.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <h5>
                        วันที่ {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()} 
                    </h5>
                    <ul>
                        {order.orders && order.orders.map(record => 
                        <li key={record.product.id}>{record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                        </li>
                    )}
                    </ul>
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }
    
    render() {
		return (
			<div>
				<Header />
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                    {this.showOrders()}
                    </div>
                </div>
				<Footer company="zoommo" email="adobebeta1997@gmail.com" />
			</div>
		);
	}
    
}

export default Order;