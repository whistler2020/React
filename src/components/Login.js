import React, { Component } from "react";
import { login } from "../utils/LogUtils";

class Login extends Component {
  componentDidMount() {
    login();
    let path = "/user";
    this.props.history.push(path);
  }

  render() {
    return <div></div>;
  }
}

export default Login;
