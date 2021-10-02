import React, { Component } from 'react';
import {AnimatePresence,motion } from "framer-motion"

import { ToastContainer, toast } from 'react-toastify';  //NOTIFY
import 'react-toastify/dist/ReactToastify.css';  //NOTIFY

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

toast.configure();  //NOTIFY

class   Laptopitem extends Component {
  
  notify = () => toast.success("Thêm sản phẩm vào giỏ hàng thành công!",{position: toast.POSITION.TOP_RIGHT}); //NOTIFY

  onAddToCart  = (item) => {
      this.props.onAddToCart(item)
   
  }

  onAddToDetail  = (item) => {
    this.props.onAddToDetail(item)
  }


  chuyenDoiURL  = (str) => {
 str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
  }


    render() {
      // const notify = () => {toast.success("Thêm sản phẩm vào giỏ hàng thành công!")}; 

        const pageTransition ={
            hidden : {
              opacity:0,

            },
            visible :{  
              opacity :1,
              transition:{ duration: 0.5},
            },
            exit:{
                opacity:0,
            }
          }
          
        var { item }= this.props;
        return (
            <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
             className="col l-2 m-6 c-6 mgtrenduoi">
              <div className="Laptop_item">
              <Link onClick={() => this.onAddToDetail(item)} to={"/LaptopitemDetail/" + this.chuyenDoiURL(item.name)+"."+ item.id +".html"}  className="Laptop_item_img">
                <img src={item.image} alt="" />
                <div className="Laptop_product_info">
                            <div>{item.name}</div>
                            <div>Năm SX: {item.detailReleasetime}</div>
                            <div>RAM: {item.detailRam}</div>
                            <div>SSD: {item.detailStorage}</div>
                            <div>HĐH: {item.detailOs}</div>
                        </div>
              </Link>
              <h4 className="text_name_height">{item.name}</h4>
              <p>{(item.price).toLocaleString()} đ</p>  
              <button className="btn_add_to_cart" onClick={() => {this.onAddToCart(item);this.notify()}}>Thêm vào giỏ</button>
            </div>
            </motion.div>
        )
    }
}

export default Laptopitem;