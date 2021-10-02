import React, { Component } from 'react';

class CartResult extends Component {
  
  showSumMoney  = (cart) => {
    var sum=0;
    if(cart.length>0){
      for(var i=0;i< cart.length;i++){
        sum+=cart[i].product.price * cart[i].quantity;
      }
    }
    return sum; 
  }
    render() {
      const {cart} = this.props; 
        return (
            <div className="row cart_product">
            <div className="col l-2 c-2 m-2" />
            <div className="col l-2 c-2 m-2" />
            <div className="col l-2 c-2 m-2" />
            <div className="col l-2 c-2 m-2">TỔNG CỘNG</div>
            <div className="col l-2 c-2 m-2">{(this.showSumMoney(cart)).toLocaleString()} đ</div>
            <div className="col l-2 c-2 m-2">
              <button className="btn_pay">TIẾN HÀNH THANH TOÁN</button>
            </div>
          </div>
        );
    }
}

export default CartResult;