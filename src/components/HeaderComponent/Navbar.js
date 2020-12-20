import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="nav-item">
                    <NaviItem value="Trang chủ" href="/" />
                    <NaviItem value="Đơn đã nhận" href="/reciveroder" />
                </nav>
            </div>
        )
    }
}

class NaviItem extends React.Component {
    render() {
        return (
            <Link to={this.props.href}> {this.props.value}</Link>

        );
    }
}
