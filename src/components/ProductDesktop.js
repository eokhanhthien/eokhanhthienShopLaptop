import React, { Component } from "react";
import {AnimatePresence,motion } from "framer-motion"

class ProductDesktop extends Component {
  render() {
    const pageTransition ={
      hidden : {
        opacity:0,

      },
      visible :{
        opacity :1,
        transition:{ease:"easeInOut"}
      },
      exit:{
          opacity:0,   
      }
    }
    return (
        <motion.div  
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"   className="Laptop_container">
        <div className="grid wide">
          <div className="Laptop_title">
            <p><i className="fad fa-desktop Laptop_title_icon"></i>SẢN PHẨM MỚI</p>
          </div>
          <div className="row Laptop_product">
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc1.jpg" alt="" />
              </div>
              <h4>Asus Vivo AIO V222FAK i5 10210U 21.5 inch (WA149T)</h4>
              <p>25,980,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc2.jpg" alt="" />
              </div>
              <h4>HP 200 Pro G4 AIO i3 10110U 21.5 inch (2J860PA)</h4>
              <p>12,200,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc3.jpg" alt="" />
              </div>
              <h4>HP AIO 22 df0131d i3 10100T 21.5 inch (180N4AA)</h4>
              <p>20,890,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc4.jpg" alt="" />
              </div>
              <h4>Mac Mini M1 2020 Silver (MGNR3SA/A)</h4>
              <p>46,600,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc5.jpg" alt="" />
              </div>
              <h4>HP AIO 24 df1032d i3 1125G4/23.8 inch/Touch</h4>
              <p>10,920,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc6.jpg" alt="" />
              </div>
              <h4>iMac 24 inch 2021 4.5K M1 7GPU (MGTF3SA/A) Silver</h4>
              <p>25,980,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc7.jpg" alt="" />
              </div>
              <h4>iMac 24 inch 2021 4.5K M1 7GPU (MJV83SA/A) Green</h4>
              <p>25,980,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc8.jpg" alt="" />
              </div>
              <h4>iMac 24 inch 2021 4.5K M1 8GPU (MGPL3SA/A) Blue</h4>
              <p>25,980,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc9.jpg" alt="" />
              </div>
              <h4>Apple Mac Mini 2020 i3 (MXNF2SA/A)</h4>
              <p>25,980,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc10.jpg" alt="" />
              </div>
              <h4>iMac 24 inch 2021 4.5K M1 8GPU (MGPD3SA/A) Silver</h4>
              <p>25,980,000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc11.jpg" alt="" />
              </div>
              <h4>iMac 24 inch 2021 4.5K M1 7GPU (MJVA3SA/A) Pink</h4>
              <p>19.340.000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc12.jpg" alt="" />
              </div>
              <h4>iMac 24 inch 2021 4.5K M1 8GPU (MGPJ3SA/A) Green</h4>
              <p>28.790.000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc13.jpg" alt="" />
              </div>
              <h4>HP AIO 24 df1028d i5 1135G7/23.8 inch</h4>
              <p>19.790.000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc14.jpg" alt="" />
              </div>
              <h4>Lenovo Ideapad Gaming 3 15IMH05 i7 10750H</h4>
              <p>24.290.000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
            <div className="col l-2 m-6 c-6 Laptop_item">
              <div className="Laptop_item_img">
                <img src="./image/pc15.jpg" alt="" />
              </div>
              <h4>Acer Aspire 7 Gaming A715 42G R4ST R5 5500U</h4>
              <p>17.990.000 đ</p>
              <button>Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default ProductDesktop;
