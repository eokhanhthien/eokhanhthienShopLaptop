import React, { Component } from 'react';
import Header from '../components/Header';
import {connect} from "react-redux"
import { actRemoveProductInCart } from '../actions';

class HeaderContainer extends Component {
    render() {
        const {cart,onDeleteProduct}=this.props;
        return (
            <Header
            cart={cart}
            onDeleteProduct={onDeleteProduct}
            ></Header>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProduct: (item) => {
            dispatch(actRemoveProductInCart(item))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
