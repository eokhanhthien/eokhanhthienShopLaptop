import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

  
class NewsDetailLaptop extends Component {

    componentDidMount  = () => {
        window.scrollTo(0, 0);
        this.initFacebookSDK();
      }
      initFacebookSDK  = () => {
        if(window.FB){
          window.FB.XFBML.parse();
        }
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
        return (
            <div className="col l-2 m-6 c-6 mgtrenduoi">
                <div className="Laptop_item">
                     <Link to={"/LaptopitemDetail/" + this.chuyenDoiURL(this.props.name)+"."+ this.props.id +".html"} className="Laptop_item_img">
                        <img src={this.props.image} alt="" />

                         <div className="Laptop_product_info">
                            <div>{this.props.name}</div>
                            <div>Năm SX:{this.props.detailReleasetime}</div>
                            <div>RAM: {this.props.detailRam} </div>
                            <div>SSD:{this.props.detailStorage}</div>
                            <div>HĐH:{this.props.detailOs}</div>
                        </div>
                    </Link>
                    <h4 className="text_name_height">{this.props.name}</h4>
                    <p>{(this.props.price).toLocaleString()} đ</p>
                    <button className="btn_add_to_cart" >Thêm vào giỏ</button>
                </div>
                </div>      
        );
    }
}

export default NewsDetailLaptop;