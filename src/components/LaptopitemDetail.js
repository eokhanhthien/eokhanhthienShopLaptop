import React, { Component } from "react";
import { toast } from "react-toastify";

import {AnimatePresence,motion } from "framer-motion"
import NewsDetailLaptop from "./NewsDetailLaptop";

import ZoomImage from "./ZoomImage/ZoomImage"
import "./Button.scss"
class LaptopitemDetail extends Component {
  componentDidMount  = () => {
    window.scrollTo(0, 0);
    this.initFacebookSDK();


  }

  onAddToCart  = (item) => {
    this.props.onAddToCart(item)
    this.notify();
  }
  notify = () => toast.success("Thêm sản phẩm vào giỏ hàng thành công!",{position: toast.POSITION.TOP_RIGHT}); //NOTIFY
  
  initFacebookSDK  = () => {
    if(window.FB){
      window.FB.XFBML.parse();
    }
  }


  //Loading btn
//   loadingbtn  = () => {
// const loginBtn = document.getElementById("login-btn");
// loginBtn.addEventListener('click', () => {
//   // Show loader on button click
//   loginBtn.classList.add("loading");
//   // Hide loader after success/failure - here it will hide after 2seconds
//   setTimeout(() => loginBtn.classList.remove("loading"), 500);
// });
// }
  
  render() {
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


    
    var dem=1;

    return (
      <motion.div 
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="exit" className="Laptop_detail">
        
{
this.props.products.arrayProduct.map((item,index)=>{
      if(item.id==this.props.id){
        return(
          <div key={index} className="grid wide">
          <div className="Laptop_title">
            <p>CHI TIẾT SẢN PHẨM</p>
          </div>
          <div className="row detail_header">
            <div className="col l-6 c-12 m-12 detail_header_left">
              {/* <img src={"." + item.image} alt="" /> */}
              <ZoomImage
              image={item.image}
              ></ZoomImage>
      
            </div>
            <div className="col l-6 c-12 m-12 detail_header_right">
              <h2>{item.name}</h2>
              <h3>{(item.price).toLocaleString()} ₫</h3>
              <ul>
                <li>{item.detailCpu}</li>
                <li>RAM 16GB DDR4 2400MHz</li>
                <li>
                  Đĩa cứng SSHD 1TB 5400rpm (8GB Cache) + 256GB SSD PCIE G3X4
                </li>
                <li>Card đồ họa NVIDIA® GeForce® GTX 1070 8GB GDDR5</li>
                <li>
                  Màn hình 15.6″ FHD (1920 x 1080) IPS Non-Glare, 100% sRGB,
                  144Hz, 7ms, 72% NTSC, G-SYNC
                </li>
                <li>
                  Cổng kết nối USB 3.0, HDMI, mDP, Type C USB 3.1 (Gen2)
                  Thunderbolt
                </li>
              </ul>
              {/* <button onClick={() => this.onAddToCart(item)} className="btn_add_detail">
                  <div className="btn hover-right">
                  <div  data-hover="Mua ngay">Xem thêm</div>
                  </div>
              </button> */}

              <div onClick={() => this.onAddToCart(item)} className="btn hover-right " >
                  <div  data-hover="Thêm vào giỏ">Mua ngay</div>
              </div>
              <div className="fb-like" data-href="https://www.ankhang.vn/?gclid=Cj0KCQjwwNWKBhDAARIsAJ8HkhdXe_FDpkYTe011m2qa91bhliQDm38mrPFYHL0L3pvp1myl4079vRQaAuu2EALw_wcB" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div>
            </div>
            
            
          </div>
          <div className="detail_product">
            <div className="detail_product_header">
              <h2>THÔNG TIN CHI TIẾT</h2>
              <div className="detail_product_border">
                <div className="row detail_product_text">
                  <div className="col l-6 c-6 m-6 detail_text">Thương hiệu</div>
                  <div className="col l-6 c-6 m-6 detail_text">APPLE</div>
                  <div className="col l-6 c-6 m-6 detail_text">Màu</div>
                  <div className="col l-6 c-6 m-6 detail_text">Đen</div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    Tốc độ chip (GHz)
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    2.8GHz upto 3.8GHz, 4Cores, 8Threads, 6MB cache, FSB 8GT/s
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">Tên chip</div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    Intel® Core™ i7-7700HQ
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">Card đồ họa</div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    NVIDIA® GeForce® GTX 1070 8GB GDDR5
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    Dung lượng ổ cứng
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">1TB</div>
                  <div className="col l-6 c-6 m-6 detail_text">Bộ Nhớ RAM</div>
                  <div className="col l-6 c-6 m-6 detail_text">16GB</div>
                  <div className="col l-6 c-6 m-6 detail_text">Camera</div>
                  <div className="col l-6 c-6 m-6 detail_text">HD Webcam</div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    Công nghệ âm thanh
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    2 x 3.5W speaker with Smart AMP
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    Công nghệ âm thanh
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    2 x 3.5W speaker with Smart AMP
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    Cổng kết nối
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    USB 3.0, HDMI, mDP, Type C USB 3.1 (Gen2) Thunderbolt
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    Cổng internet (LAN)
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">
                    10/100/1000 Base T
                  </div>
                  <div className="col l-6 c-6 m-6 detail_text">Loại pin</div>
                  <div className="col l-6 c-6 m-6 detail_text">4 Cell</div>
                </div>
                <div className="Laptop_title">
                  <p>MÔ TẢ SẢN PHẨM</p>
                </div>
                <div className="description_1">
                {item.detailDescription1}
                </div>
                <div className="description_1">
                  <img src={"." + item.detailImage1} alt="" />
                </div>
                <div className="description_1">
                {item.detailDescription2}

                </div>
                <div className="description_1">
                  <img src={"." + item.detailImage2} alt="" />
                </div>
                </div>
               
              </div>

          </div>  

         
          <div class="fb-comments" data-href="https://www.facebook.com/ShopeeVN/" data-width="100%" data-numposts="5"></div>

          </div>
        )
      }
    })



}

        <div className="grid wide">
          
              <div className="Laptop_title">
                  <p>SẢN PHẨM TƯƠNG TỰ</p>
                </div>
                <div className="row Laptop_product">
                  {
                    this.props.products.arrayProduct.map((item,index)=>{
                      if(item.id != this.props.id){
                        if(dem <=6 ){
                          dem++;
                         return(
                          <NewsDetailLaptop
                          price={item.price}
                          id={item.id}
                          key={index}
                          name={item.name}
                          image={"." + item.image}
                          detailReleasetime={item.detailReleasetime}
                          detailRam={item.detailRam}
                          detailStorage={item.detailStorage}
                          detailOs={item.detailOs}
                          ></NewsDetailLaptop>

                      )
                      }
                      }
                      
                     
                    })
                  }
                  
                  
                </div>
           </div>
      </motion.div>
    );
  }
}

export default LaptopitemDetail;
