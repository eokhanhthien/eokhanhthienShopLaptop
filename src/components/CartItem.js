import React, { Component } from 'react';
import {AnimatePresence,motion } from "framer-motion"

import { ToastContainer, toast } from 'react-toastify';  //NOTIFY
import 'react-toastify/dist/ReactToastify.css';  //NOTIFY

toast.configure();  //NOTIFY

class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state={
      quantity:"",
    }
  }
  
  notify_delete = () => toast.info("Xóa sản phẩm khỏi giỏ hàng thành công!",{position: toast.POSITION.TOP_RIGHT}); //NOTIFY

  showSubTotal  = (price, quantity) => {
    return price*quantity;
  }
  onDelete  = (item) => {
    this.props.onDeleteProduct(item)
    this.notify_delete()
  }
  onUpdateQuantity  = (product, quantity) => {
    if(quantity > 0){
      this.setState({
        quantity:quantity,  // Thay cho quantity luc dau
      });
      this.props.onUpdateProduct(product,quantity)
    }
  }
    render() {
      const pageTransition ={
        hidden : {
          opacity:0,

        },
        visible :{
          opacity :1,
          transition:{ duration: 1},
        },
        exit:{
            opacity:0,
        }
      }
      
      const {cart}= this.props;
      const {quantity}=cart.quantity>0? cart : this.state;
        return (
          <motion.div 
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="exit" 
          className="row cart_product">
            <div className="col l-2 c-2 m-2">
              <img src={cart.product.image} alt="" />
            </div>
            <div className="col l-2 c-2 m-2">{cart.product.name}</div>
            <div className="col l-2 c-2 m-2">{(cart.product.price).toLocaleString()} đ</div>
            <div className="col l-2 c-2 m-2">
              {cart.quantity}{" "}
              <span className="btn_quantity">
                <button onClick={() => this.onUpdateQuantity(cart.product,cart.quantity -1)} className="btn-quantity">-</button>
                <button onClick={() => this.onUpdateQuantity(cart.product,cart.quantity +1)} className="btn-quantity">+</button>
              </span>{" "}
            </div>
            <div className="col l-2 c-2 m-2">{(this.showSubTotal(cart.product.price,cart.quantity)).toLocaleString()} đ</div>
            <div className="col l-2 c-2 m-2">
              <span onClick={() => this.onDelete(cart.product)}> <i className="far fa-times-circle icon_delete" /></span>
            </div>
          </motion.div>
        );
    }
}

export default CartItem;