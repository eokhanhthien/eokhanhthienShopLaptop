import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

  import { ToastContainer, toast } from 'react-toastify';  //NOTIFY
  import 'react-toastify/dist/ReactToastify.css';  //NOTIFY

  import "./Shake.css"
  toast.configure();  //NOTIFY
class Header extends Component {
  notify_delete = () => toast.info("Xóa sản phẩm khỏi giỏ hàng thành công!",{position: toast.POSITION.TOP_RIGHT}); //NOTIFY


//Hàm đếm số lượng sản phẩm
  Sumproduct  = (cart) => {
    var sum=0;
    if(cart.length > 0){
      for(var i=0;i<cart.length;i++){
        sum +=cart[i].quantity;
      }
    }
    return sum;
  }

  //Hàm đếm tổng tiền
  showSumMoney  = (cart) => {
    var sum=0;
    if(cart.length>0){
      for(var i=0;i< cart.length;i++){
        sum+=cart[i].product.price * cart[i].quantity;
      }
    }
    return sum; 
  }

//Hàm xóa sản phẩm
onDelete  = (item) => {
  this.props.onDeleteProduct(item);
  this.notify_delete();
}

  showCartMini  = (cart) => {
    var result= null;
    if(cart.length>0){
    result= cart.map((item,index)=>{
      return(
        <div key={index} className="Header_right_cartmini_item">
        <div className="row with_item">        
      <div className="col l-4 c-4 m-4">
        <img src={"."+item.product.image} alt="" />
      </div>
      <div className="col l-7 c-7 m-7">
        <h3>{item.product.name}</h3> 
        <p>{(item.product.price).toLocaleString()} đ x {item.quantity}</p>
      </div>
        <div  className="col l-1 c-1 m-1 Garbage-btn"><i onClick={() => this.onDelete(item.product)} className="fas fa-trash-alt Garbage_icon"></i></div>
      
    </div>
      </div>
      )
    })
    return result;
    }
    else{
      return <div className="message_cartmini">Chưa có sản phẩm trong giỏ hàng !</div>
    }
    
  }

  onShowModalFavorite  = () => {
    this.props.onShowModalFavorite();
  }
  render() {
    
    return (
      <div className="Header">

        <div className="grid wide">
          <div className="row Header_container">
            <div className="Header_left col l-6">
              
              <div className="Header_left_image">
                {" "}
                <NavLink  to="/" ><img
                  className="Header_left_img"
                  src="./image/logo.png"
                  alt=""
                /></NavLink>
              </div>
            </div>
            <div className="Header_right col l-6">
            <div className="Cart_Mini">GIỎ HÀNG/ {(this.showSumMoney(this.props.cart)).toLocaleString()} đ
            
            <div className="Header_right_cartmini">
            <div className="Header_right_cartmini_title"><i className="fas fa-shopping-cart icon_cart2"></i>GIỎ HÀNG CỦA BẠN</div>
            {this.showCartMini(this.props.cart)}
              {/* {
               this.props.cart && this.props.cart.map((item,index)=>{
                  return(
                    <div key={index} className="Header_right_cartmini_item">
                    <div className="row with_item">        
                  <div className="col l-4">
                    <img src={item.product.image} alt="" />
                  </div>
                  <div className="col l-8">
                    <h3>{item.product.name}</h3> 
                    <p>{(item.product.price).toLocaleString()} đ</p>
                  </div>
                </div>
                  </div>
                  )
                })
               
                } */}
        </div>

            </div>
              <NavLink  to="/CartContainer" >
                <div className="icon_quantity"><i className="fas fa-shopping-cart icon_cart faa-wrench animated-hover" /> <p><span>{this.Sumproduct(this.props.cart)}</span></p></div>
              </NavLink>
              <div className="icon_quantity_user" onClick={() => this.onShowModalFavorite()}><i className="fad fa-heart-circle icon_user"></i></div>

              <div className="icon_quantity_user"><i className="fas fa-user-circle icon_user"></i>
                <div className="user_option">
                <NavLink  to="/Login"  className="user_option_item">Đăng nhập <i className="fas fa-sign-in"></i></NavLink>
                    <div className="user_option_item">Đăng ký</div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row Header_product">
          <div className="grid wide">
            <div className="row header_item">
               <NavLink activeClassName="selected" to="/Home"  className="col l-2 Header_product_item">
                <div className="div">
                  <i className="fas fa-home Header_product_item_icon" />
                </div>
                <div>TRANG CHỦ</div>
              </NavLink>
              <NavLink activeClassName="selected" to="/ProductLaptop" className="col l-2 Header_product_item">
                <div className="div">
                  <i className="fas fa-laptop Header_product_item_icon" />
                </div>
                <div>LAPTOP</div>
              </NavLink>
              <NavLink activeClassName="selected" to="/ProductDesktop" className="col l-2 Header_product_item">
                <div className="div">
                  <i className="fas fa-desktop Header_product_item_icon" />
                </div>
                <div>DESKTOP</div>
              </NavLink>

              <NavLink activeClassName="selected" to="/ProductSmartphone" className="col l-2 Header_product_item">
                <div className="div">
                  <i className="fas fa-mobile-alt Header_product_item_icon" />
                </div>
                <div>SMARTPHONE</div>
              </NavLink>
              <NavLink activeClassName="selected" to="/ProductItem" className="col l-2 Header_product_item">
                <div className="div">
                  <i className="fas fa-headset Header_product_item_icon" />
                </div>
                <div>PHỤ KIỆN</div>
              </NavLink>
              <NavLink activeClassName="selected" to="/Technews" className="col l-2 Header_product_item">
                <div className="div">
                  <i className="far fa-newspaper Header_product_item_icon" />
                </div>
                <div>TIN CÔNG NGHỆ</div>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
