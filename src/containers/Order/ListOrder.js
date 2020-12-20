import React, { Component } from 'react'
// import Order from './Order'
import 'antd/dist/antd.css'
import { List, Avatar } from 'antd'


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

export default class ListOrder extends Component {
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
                    dataSource={listData}

                    renderItem={item => (
                        <List.Item key={item.title} >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                            />
                            <div>
                                {item.nameproduct}
                            </div>
                            <div className="total-bill">
                                <span>Tiền ứng hàng : </span>
                                <span>{item.money}</span>
                            </div>
                            <div className="state-delivery">
                                <span>Trạng thái: </span>
                                <span>{item.stateorder}</span>
                            </div>
                            <div className="time-delivery">
                                <span>Giờ giao hàng: </span>
                                <span>{item.timedelivery}</span>
                            </div>
                            <div className="fromlocation">
                                <span>Điểm đi: </span>
                                <span>{item.fromlocation}</span>
                            </div>
                            <div className="tolocation">
                                <span>Điểm đến: </span>
                                <span>{item.tolocation}</span>
                            </div>
                            <div id="btn-nhan">
                                <button className="btn btn-danger" style={{ border: 'none' }}>Nhận Đơn</button>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
