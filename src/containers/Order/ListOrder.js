import React, { Component } from 'react';
// import Order from './Order'
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import {withRouter} from 'react-router-dom';
import {STAT_URL} from '../../consts'

import axios from 'axios';

class ListOrder extends Component {
    constructor(props){
        super(props);
        this.state = { data: []}
    }

    componentDidMount(){
        let config = {headers:{Auth:  window.localStorage.getItem('token')}}
        axios.get(`${STAT_URL}/v1/listorder`,config)
        .then((response) => {
            if (response.data.error.code === 200){
                this.setState({ data: response.data.data }, () => console.log(this.state.data))
            }
            else{
                this.props.history.push("/login")
            } 
        })
        .catch(() => this.props.history.push("/login"))
    }

    receiveOrder(order_id){
        let config = {headers:{Auth: window.localStorage.getItem('token')}}
        axios.post(`${STAT_URL}/v1/listorder/?orderid=${order_id}`,{},config)
        .then((response) => {
            if (response.data.error.code === 200){
                if(response.data.data === true){
                    alert("Nhận đơn hàng thành công");
                }
                else{
                    alert("Nhận đơn hàng thất bại");
                }
                axios.get(`${STAT_URL}/v1/listorder`,config)
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
                            <div id="btn-nhan">
                                <button className="btn btn-danger" onClick={() => this.receiveOrder(item.id)} style={{ border: 'none' }}>Nhận Đơn</button>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}


export default withRouter(ListOrder);