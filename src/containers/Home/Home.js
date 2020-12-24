
import React, { Component } from 'react'
import ListOrder from "../Order/ListOrder"
import Header from "../../components/HeaderComponent/Header"


export default class Home extends Component {
    render() {
        return (
            <div className= "home-container">
                <Header></Header>
                <div id="label-order">
                    <h3>Đơn hàng mới</h3>
                </div>
                <ListOrder></ListOrder>
            </div>
        )
    }
}
