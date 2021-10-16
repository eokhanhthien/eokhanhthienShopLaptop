import React, { Component } from 'react';
import Facebook from './Facebook';
import "./Login.scss"

class Login extends Component {
    render() {
        return (
            <div className="Login_container">
                <h2>Đăng nhập bằng facebook</h2>
                <Facebook></Facebook>
            </div>
        );
    }
}

export default Login;