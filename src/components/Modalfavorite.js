import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AnimatePresence, motion } from "framer-motion";
import { actShowmodalFavorite ,actDeleteFavoriteProduct,actAddToCart} from '../actions';

import { toast } from "react-toastify";
import "./Modalfavorite.css"

class Modalfavorite extends Component {

  notify = () => toast.success("Thêm sản phẩm vào giỏ hàng thành công!",{position: toast.POSITION.TOP_RIGHT,theme: "colored" }); //NOTIFY
  
  showProductFavorite  = () => {
    let result="";
   if(this.props.favorite.length>0){
    result = this.props.favorite.map((item,index)=>{
      return (
      <div key ={index} className="row Modal_favorite_item">
    <div className="col l-3">
    <div className="favorite_img">
        <img src={"."+item.product.image} />
      </div>
    </div>
    <div className="col l-5"><p>{item.product.name}</p></div>
    <div className="col l-2" onClick={() => [this.props.onAddToCart(item.product),this.notify()]}><i className="fas fa-cart-plus icon_add_cart" /></div>
    <div className="col l-2" onClick={() => this.props.onDeleteFavorite(item.product)}><i className="fal fa-trash-alt icon_add_cart"></i></div>
  </div>
      )
    })
   }
   else {
    result = <div ><img className="img_cart_empty" src="../image/nofavorite.png"/> <div className="text_img_cart_empty">Chưa có sản phẩm yêu thích</div></div>
   }
   return result

  }

    render() {
        const pageTransition = {
            hidden: {
              x:"400px",
              opacity: 0,
            },
            visible: {
              x:"0px",
              opacity: 1,
              transition: { duration: 0.4},
            },
  
          };

          // console.log(this.props.favorite[1].product)
// console.log(this.props.favorite.length)
        // if(this.props.showModal.isShowFavorite){
        return (
          <AnimatePresence exitBeforeEnter>
        {   this.props.showModal.isShowFavorite && <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="hidden" 

        className="Modal_favorite">
          <div className="Modal_favorite_fixedtop">
            <div className="Modal_favorite_icon_close" onClick={() => this.props.onShowModalFavorite()}><i className="fal fa-times-hexagon" /></div>
            <div className="Modal_favorite_title" > <i className="fab fa-gratipay" /> YÊU THÍCH</div>
            </div>
            
            {this.showProductFavorite()}
            
           
          </motion.div>}
          </AnimatePresence>
        );
    }
        // else{return null}
}
// }

const mapStateToProps = (state, ownProps) => {
    return {
        showModal: state.showModal,
        favorite: state.favorite
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onShowModalFavorite: () => {
            dispatch(actShowmodalFavorite())
        },
        onDeleteFavorite: (item) => {
          dispatch(actDeleteFavoriteProduct(item))
      }, 
      onAddToCart: (item)=>{
        dispatch(actAddToCart(item,1))
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modalfavorite)

