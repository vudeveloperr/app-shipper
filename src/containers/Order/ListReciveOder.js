import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { List, Avatar } from 'antd'
import Header from "../../components/HeaderComponent/Header"

import {STAT_URL} from '../../consts'

import axios from 'axios';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `Mã đơn : 13457982452${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        nameproduct: 'Bún chả, bun gan',
        money: '12345654',
        stateorder: 'chua giao',
        timedelivery: '123456789765',
        fromlocation: 'so 873, duong hoang quoc viet, co nhue ,bac tu liem , ha noi',
        tolocation: 'g234qgfqwef2   3',
    });
}

// const IconText = ({ icon, text }) => (
//     <Space>
//         {React.createElement(icon)}
//         {text}
//     </Space>
// );

export default class ListReciveOder extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        let config = { headers: { Auth: window.localStorage.getItem('token') } }
        axios.get(`${STAT_URL}/v1/listorder/shipper`, config)
            .then((response) => {
                if (response.data.error.code === 200) {
                    this.setState({ data: response.data.data }, () => console.log(this.state.data))
                }
                else {
                    this.props.history.push("/login")
                }
            })
            .catch(console.log)
    }


    receiveOrder(order_id){
        let config = {headers:{Auth: window.localStorage.getItem('token')}}
        axios.post(`${STAT_URL}/v1/listorder/shipper/?orderid=${order_id}`,{},config)
        .then((response) => {
            if (response.data.error.code === 200){
                if(response.data.data === true){
                    alert("Nhận đơn hàng thành công");
                }
                else{
                    alert("Nhận đơn hàng thất bại");
                }
                axios.get(`${STAT_URL}/v1/listorder/shipper`,config)
                .then((response) => {
                    if (response.data.error.code === 200){
                        this.setState({ data: response.data.data }, () => console.log(this.state.data))
                    }
                    else{
                        this.props.history.push("/login")
                    } 
                })
                .catch(console.log)
            }
            else{
                this.props.history.push("/login")
            } 
        })
        .catch(console.log)
    }


    render() {
        return (

            <div className="reciveorder">
                <Header></Header>
                <div id="label-order">
                    <h3>Đơn hàng đã nhận</h3>
                </div>
                <div className="container">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 6,
                        }}
                        dataSource={this.state.data}

                        renderItem={item => (
                            <List.Item key={item.title} >
                                <List.Item.Meta
                                    title={<a>Mã đơn:{item.id}</a>}
                                />
                                <div> Danh sách hàng:
                                {
                                        (item.list_food || []).map((i) =>
                                            (<span>{i.name},</span>)
                                        )}
                                </div>
                                <div className="total-bill">
                                    <span>Tiền ứng hàng : </span>
                                    <span>{item.total_amount}đ</span>
                                </div>
                                <div className="tolocation">
                                    <span>Điểm đến: </span>
                                    <span>{item.address}</span>
                                </div>
                                {item.order_status === "4" ?
                                    <div id="btn-nhan">
                                        <button className="btn btn-danger" onClick={() => this.receiveOrder(item.id)}  style={{ border: 'none' }}>Đã giao</button>
                                    </div>
                                    : 
                                    <></>
                                }

                            </List.Item>
                        )}
                    />
                </div>

            </div>
        )
    }
}
