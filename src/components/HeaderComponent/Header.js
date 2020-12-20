import React, { Component } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className= "row">
                    <div className="col-3">
                        <Logo></Logo>
                    </div>
                    <div className="col-9">
                        <Navbar></Navbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
