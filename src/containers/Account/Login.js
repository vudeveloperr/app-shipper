import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { BASE_URL } from '../../consts';

const Background = styled.div`
    background-image: url('/img/6.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    background-position: center;
`;


class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    login(values) {
        console.log(values)
        axios.post(`${BASE_URL}/api/v1/shipper/login`, values)
            .then(
                (respone) => {
                    window.localStorage.setItem('token',`${respone.data.tokenType} ${respone.data.accessToken}`)
                    window.dispatch({type: 'LOGGED', data: true});
                    this.props.history.push("/");
                }
            )
            .catch(console.log)
    }

    onFinish = (values) => {
        this.login(values);
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value })
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <Background>
                <div className="container">
                    <div className="col-md-3 col-md-offset-4">
                        <span className="text">Login</span>
                        <Form onFinish={this.onFinish} >
                            <Form.Item name='username'>
                                <Input placeholder="Username" ></Input>
                            </Form.Item>
                            <Form.Item name='password'>
                                <Input.Password placeholder="Password"  ></Input.Password>
                            </Form.Item>
                            <Form.Item>
                                <Button className="btn btn-success" htmlType='submit'>Đăng nhập</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Background>
        );
    }
}

export default Login