import React, { Component } from 'react';
import "./Loading.css"

class Loading extends Component {
    render() {
        return (
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
    }
}

export default Loading;