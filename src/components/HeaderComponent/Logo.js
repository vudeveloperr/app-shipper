import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        return (
            <div className="header_logo">
                <a href="/">
                    <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='hihi' style={{ width: '300%' }}></img>
                </a>
            </div>
        )
    }
}
