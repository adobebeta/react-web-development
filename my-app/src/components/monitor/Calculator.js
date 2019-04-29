import React, { Component } from "react"

class Calculator extends Component {

    showOrders(orders) {
        if (!orders || orders.length == 0) {
            return <li className="text-right title text-muted">ไม่มีสินค้าค่ะ</li>
        } else {
            return orders.map(order => {
                return (
                    <li className="text-right text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                )
            })
        }
    }

    // รับค่า จาก props แล้ว เอาค่าที่ได้ใส่ในตัวแปร totalPrize , order
    render() {
        const { totalPrice, orders } = this.props;

        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr />
                <ul className="list-unstyled ">
                {/* เรียกใช้ function showOrder โดยส่ง orders เข้าไป */}
                    {this.showOrders(orders)} 
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">ยืนยัน</button>
                <button className="btn btn-block btn-secondary  title">ยกเลิก</button>
            </div>

        );
    }
}

export default Calculator;