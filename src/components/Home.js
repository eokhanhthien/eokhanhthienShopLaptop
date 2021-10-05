import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";


import AOS from "aos"; //AOS
import "aos/dist/aos.css"; //AOS
import Banner from "./Banner/Banner";

import "./Button.scss"
import Slick from "./Slick/Slick";
import "./Shake.css"
import ShowImage from "./ShowImage/ShowImage";
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import BannerAuto from "./BannerAuto/BannerAuto";


class Home extends Component {
  componentDidMount = () => {
    let scrollRef = 0;
    
    window.scrollTo(0, 0); // Làm cho route lên Top
    AOS.init({
      // initialise with other settings
      startEvent: "load", //khởi tạo AOS ngay trước khi chạy
      duration: 1000,
      offset: 100,
      once: true, // Scroll vẫn giữ nguyên
      // easing: "ease-in-sine",
      debounceDelay: 50,
      mirror: true,
    });

    window.addEventListener("scroll", function () {
      // increase value up to 10, then refresh AOS
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
    AOS.refresh()

  };

  render() {
    const pageTransition = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: { duration: 1 },
      },
      exit: {
        opacity: 0,
      },
    };
    return (
      <div>
      <Banner></Banner>
      <div className="grid wide home_title_container">
        <div className="row home_title_1">
          <div 
          data-aos="fade-right" 
          data-aos-delay="50"
          className="col l-4 m-12 c-12 home_title_1_imge">
            <img src="./image/home_1.jpg" />
          </div>
          <div className="col l-8 m-12 c-12">
            <div className="row home_option">
              <div 
              data-aos-delay="150"
              data-aos="fade-up" 
              className="col l-6 c-12 m-12 ">
                <div className="home_options">
                <h2>See All Services</h2>
                <div className="btn hover-right">
                <NavLink  to="/ProductLaptop" data-hover="Mua ngay">Xem thêm</NavLink>
                </div>
                <p> you can browse the latest products developed for our clients for different corporate purposes</p>
              </div>
              </div>

              <div 
               data-aos-delay="500"
               data-aos="fade-up"
              className="col l-6 c-12 m-12">
                <div className="home_options">
              <h2>CORPORATE SOLUTIONS</h2>
              <p>Need specific software for your company? We are ready to develop it!</p>
              <i className="fa fa-phone home_options_icon  faa-ring animated fa-4x" aria-hidden="true"></i>
              </div>
              </div>

              <div 
               data-aos-delay="850"
               data-aos="fade-up"
              className="col l-6 c-12 m-12 ">
                 <div className="home_options">
              <h2>CALL CENTER SOLUTIONS</h2>
              <p>Our experts provide custom products of any complexity for call centers.</p>
              <i className="fas fa-headset home_options_icon faa-pulse animated fa-4x"></i>
              </div>
              </div>

              <div 
               data-aos-delay="1200"
               data-aos="fade-up"
              className="col l-6 c-12 m-12 ">
                 <div className="home_options">
              <h2>CLOUD DEVELOPMENT</h2>
              <p>We can also offer you reliable cloud development solutions.</p>
              <i className="fas fa-box-open home_options_icon faa-shake animated fa-4x"></i>
              </div> 
              </div>


            </div>
          </div>
        </div> 

        <div className="Latest_project">Latest Projects</div>
        <p className="Latest_project_text">In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.</p>
        <Slick></Slick>
        
   <div className="row">
  <div className="col l-6">
    <div className="recomment_home">
      <img src="./image/hom_2.jpg" alt="" />
    </div>
  </div>
  <div className="col l-6">
    <div className="recomment_home">
      <h2>Mang đến cho bạn trải nghiệm tuyệt vời nhất</h2>
      <p>Mạng lưới mua sắm rộng – Mạng internet toàn cầu mở rộng trên khắp mọi nơi vì vậy bạn có thể mua sắm tại các tỉnh thành khác, thậm chí mua hàng ở nước ngoài mà không phải bước chân ra khỏi cửa.</p>
      <p>Thủ tục đăng ký mua hàng đơn giản – Mua hàng trực tuyến trở nên ngày càng phổ biến nên các thủ tục đăng ký mua bán cũng được đơn giản hóa hết mức có thể. các Website mua hàng trực tuyến với hệ thống đăng ký và mua hàng đơn giản nhất cùng các hướng dẫn và minh họa cụ thể giúp bạn sử dụng dễ dàng. Chỉ sau vài cú nhấp chuột, bạn đã có thể ung dung chờ món hàng như ý muốn gửi ngay tới bạn.</p>
    </div>
  </div>
</div>

<div className="row">
    <div className="col l-6">
    <div className="recomment_home">
      <h2>Giá cả cạnh tranh, chất lượng tuyệt vời</h2>
      <p>Vì không phải thanh toán các khoản tiền mặt bằng, chi phí cửa hàng nên đa phần các website bán hàng online đều cung cấp sản phẩm với mức giá thấp hơn khi bạn mua bên ngoài mà chất lượng và chế độ bảo hành  vẫn đảm bảo như khi mua ở các cửa hàng, siêu thị truyền thống .</p>
      <p>Tất cả giá cả đều có sẵn tại các website bán hàng trực tuyến. Bạn được biết giá trước khi quyết định mua hàng, lựa chọn sản phẩm phù hợp với túi tiền của mình.</p>
      <p>Và trong các dịp lễ hội,thì các web bán hàng trực tuyến luôn có những chương trình khuyến mãi hoặc các trò chơi có thưởng rất hấp dẫn</p>
      <p>Vì vậy khi mua hàng online giúp bạn tiết kiệm thời gian tối đa và bớt đi các rắc rối của cuộc sống.</p>
      <p>Mua hàng online ngày càng có nhiều lợi ích, chẳng hạn như mua hàng đơn giản hơn, bạn có thể đánh giá sản phẩm qua những phản hồi của các khách hàng trước, nhận được những khuyến mãi, giảm giá</p>
    </div>
  </div>

  <div className="col l-6">
    <div className="recomment_home">
      <img src="./image/hom_3.jpg" alt="" />
    </div>
  </div>

</div>



        <div className="Latest_project">How it work</div>
        <p className="Latest_project_text">In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.</p>
        
        
    <div className="row ">
   <div 
   data-aos-delay="150"
   data-aos="fade-right"
   className="col l-4 work_container">
    <div className="work_item">
      <div className="work_item_icon"><i className="fad fa-map-marked-alt" /></div>
      <h2>Find Good Places</h2>
      <p>lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.</p>
    </div>
  </div>
  <div 
  data-aos-delay="500"
  data-aos="fade-right"
  className="col l-4 work_container">
    <div className="work_item">
      <div className="work_item_icon"><i className="fad fa-mail-bulk" /></div>
      <h2>Contact The Owner</h2>
      <p>lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.</p>
    </div>
  </div>
  <div 
  data-aos-delay="850"
  data-aos="fade-right" 
  className="col l-4 work_container">
    <div className="work_item noAffter">
      <div className="work_item_icon"><i className="fad fa-address-card" /></div>
      <h2>Make a Reservation</h2>
      <p>lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.</p>
    </div>
  </div>
</div>



  <ShowImage></ShowImage>
      </div>
      {/* <BannerAuto></BannerAuto> */}
      </div>
      
    );
  }
}

export default Home;
