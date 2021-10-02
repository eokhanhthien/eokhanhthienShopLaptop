import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actRemoveProductInCart ,actSumInHeader,actUpdateProductInCart} from '../actions';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import ProductCart from "./../components/ProductCart"
import * as Message from "./../constants/Message"

class CartContainer extends Component {
    showCartItem  = (cart) => {
        var result=Message.MSG_CART_EMPTY;
        if(cart.length>0){
            result = cart.map((item, index)=>{
                return (<CartItem
                key={index}
                cart={item}
                onDeleteProduct={this.props.onDeleteProduct}
                onUpdateProduct={this.props.onUpdateProduct}
                ></CartItem>)
            })
        }
        else{
            result =  <div className="img_cart"><img className="img_cart_empty" src="./image/cart_empty.png"/> <div className="text_img_cart_empty">{Message.MSG_CART_EMPTY}</div></div>
        }
        return result
    }

    sumMoney  = (cart) => {
        var result=null;
        if(cart.length>0){
            result = <CartResult 
            cart={cart}></CartResult>
        }
        return result;
    }

    render() {
        const {cart}=this.props;
        return (
            <ProductCart>
                {this.showCartItem(cart)}
                {this.sumMoney(cart)}
            </ProductCart>
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
        onUpdateProduct: (item,quantity) => {
            dispatch(actUpdateProductInCart(item,quantity))
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)