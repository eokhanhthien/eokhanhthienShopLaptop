import React, { Component } from 'react';
import Header from '../components/Header';
import {connect} from "react-redux"
import { actRemoveProductInCart,actShowmodalFavorite } from '../actions';

class HeaderContainer extends Component {
    render() {
        const {cart,onDeleteProduct,onShowModalFavorite,loginFacebook}=this.props;
        return (
            <Header
            cart={cart}
            onDeleteProduct={onDeleteProduct}
            onShowModalFavorite={onShowModalFavorite}
            loginFacebook={loginFacebook}
            ></Header>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        loginFacebook: state.loginFacebook

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProduct: (item) => {
            dispatch(actRemoveProductInCart(item))
        },
        onShowModalFavorite: () => {
            dispatch(actShowmodalFavorite())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
