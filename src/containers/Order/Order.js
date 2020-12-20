import React, { Component } from 'react'

export default class Order extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-order">
                    <div className="orderid">
                        <h5>Mã đơn : 13457982452</h5>
                        <div className="name-food">
                            <span>Bún chả</span>
                        </div>
                        <div className="total-bill">
                            <span>Tiền ứng hàng : </span>
                            <span>300000 đ</span>
                        </div>
                        <div className="state-delivery">
                            <span>Trạng thái: chưa giao</span>
                        </div>
                        <div className="time-delivery">
                            <span>Giờ giao hàng</span>
                        </div>
                        <div className="fromlocation">
                            <span>Điểm đi</span>
                        </div>
                        <div className= "tolocation">
                            <span>Điểm đến</span>
                        </div>
                        <div id="btn-nhan">
                            <button className="btn btn-danger" style={{ border: 'none' }}>Nhận Đơn</button>
                        </div>
                        
                    </div>
                </div>
                <p></p>
            </div>
        )
    }
}
