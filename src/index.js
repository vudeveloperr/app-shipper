import React from "react";
import ReactDOM from "react-dom";

import "./css/login.css";
import "./css/style.css";
import 'antd/dist/antd.css';
import "./css/bootstrap.min.css";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./containers/Account/Login";
import Home from "./containers/Home/Home";
import ListReciveOrder from "./containers/Order/ListReciveOder"

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Home}/>
    <Route path="/login" exact component={Login} />
    <Route path="/reciveroder" exact component={ListReciveOrder} />
  </Router>,
  document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
