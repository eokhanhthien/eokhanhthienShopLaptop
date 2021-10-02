import React, { Component } from "react";


class Cart extends Component {
  componentDidMount  = () => {
    window.scrollTo(0, 0);
  }
  render() {
    const {children}=this.props;
    return (
     
      <div className="Cart">
        <div className="grid wide">
          <div className="Laptop_title">
            <p>
              <i className="fad fa-shopping-cart Laptop_title_icon" />
              GIỎ HÀNG CỦA BẠN
            </p>
          </div>
          <div className="row cart_title">
            <div className="col l-2 c-2 m-2" />
            <div className="col l-2 c-2 m-2">Sản phẩm</div>
            <div className="col l-2 c-2 m-2">Giá</div>
            <div className="col l-2 c-2 m-2">Số lượng</div>
            <div className="col l-2 c-2 m-2">Tổng cộng</div>
            <div className="col l-2 c-2 m-2" />
          </div>
           
         {/* <CartItem></CartItem>
          <CartItem></CartItem> */}
         
          {children}
          {/* <CartResult></CartResult> */}


        
        </div>
      </div>
    );
  }
}

export default Cart;
