import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "./Slider/Slider";

import AOS from "aos"; //AOS
import "aos/dist/aos.css"; //AOS


class NewsTech extends Component {
  
  componentDidMount = () => {
    let scrollRef = 0
    window.addEventListener("scroll", function () {
      // increase value up to 10, then refresh AOS
      scrollRef <= 10 ? scrollRef++ : AOS.refresh()
    })
    
    window.scrollTo(0, 0); // Làm cho route lên Top
    AOS.init({
      // initialise with other settings
      startEvent: 'load', //khởi tạo AOS ngay trước khi chạy
      duration: 1000,
      offset: 200,
      once: true, // Scroll vẫn giữ nguyên
      easing: "ease-in-sine",

      debounceDelay: 50,
      mirror: true,
    });
    // AOS.refresh()  //Đảm bảo hoạt động sự kiện, tinshtoans các khoảng cách
    // AOS.refreshHard()  //Đảm bảo hoạt động sự kiện, tinshtoans các khoảng cách
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
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="Content"
      >
        <div className="grid wide">
          <div className="row Content_container">
            <div className="col l-8 Content_container_left">
              {/* <div className="container_left_image">
                <img
                  className="container_left_img"
                  src="./image/content1.jpg"
                  alt=""
                />
              </div>
              <div className="container_left_text">
                Mua Macbook trúng sổ tiết kiệm
              </div> */}
              <Slider></Slider>
            </div>
            <div className="col l-4 Content_container_right">
              <img
                // data-aos="fade-left"
                className="container_left_img"
                src="./image/content2.jpg"
                alt=""
              />
              <img
              // data-aos-delay="1000"
              //  data-aos="fade-left"
                className="container_left_img"
                src="./image/content3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row content_info">
            <div className="col l-8 c-12 m-12 content_info_left">
              <div className="content_info_item">
                <div className="row border" >
                  <div className="col l-4 m-6 c-12 content_info_item_image">
                    <img src="./image/content4.jpg" alt="" />
                  </div>
                  <div className="col l-8 m-6 c-12 content_info_item_text">
                    <h2>
                      Mở hộp Galaxy Watch4 Classic: Thiết kế truyền thống, tính
                      năng thông minh, hiệu năng mạnh mẽ
                    </h2>
                    <span> Today, 14:37</span>
                    <p>
                      Galaxy Watch4 Classic là chiếc smartwatch mang một vẻ
                      ngoài truyền thống kết hợp với nhiều tính năng cao cấp.
                      Mời bạn cùng chúng tôi mở hộp Galaxy Watch4 Classic phiên
                      bản chính hãng được bán tại thị trường Việt Nam. Đây là
                      hộp của sản phẩm. Thiết
                    </p>
                  </div>
                </div>
                <div className="row border" >
                  <div className="col l-4 m-6 c-12 content_info_item_image">
                    <img src="./image/content6.jpg" alt="" />
                  </div>
                  <div className="col l-8 m-6 c-12 content_info_item_text">
                    <h2>
                      Ứng dụng AI để nâng cao chuỗi giá trị cây thanh long tại
                      Đài Loan
                    </h2>
                    <span> Today, 14:37</span>
                    <p>
                      Thanh long được Đài Loan xác định là một trong những cây
                      ăn trái đặc sản có lợi thế cạnh tranh và là nguồn nông sản
                      hàng hóa xuất khẩu có giá trị kinh tế cao. Để phát triển
                      bền vững cây thanh long, Đài Loan đã kết hợp ứng dụng trí
                      tuệ con người HI
                    </p>
                  </div>
                </div>
                <div className="row border"  >
                  <div className="col l-4 m-6 c-12 content_info_item_image">
                    <img src="./image/content7.jpg" alt="" />
                  </div>
                  <div className="col l-8 m-6 c-12 content_info_item_text">
                    <h2>
                      Các nền tảng phòng chống tấn công từ chối dịch vụ(DDOS)từ
                      Israel
                    </h2>
                    <span> Today, 13:31</span>
                    <p>
                      Giải pháp phòng chống các cuộc tấn từ chối dịch vụ phân
                      tán (DDoS) là nền tảng nhằm mục đích bảo vệ hoặc giảm
                      thiểu nguy cơ tấn công DDoS cho các doanh nghiệp và tổ
                      chức.
                    </p>
                  </div>
                </div>
                <div className="row border"  >
                  <div className="col l-4 m-6 c-12 content_info_item_image">
                    <img src="./image/content8.jpg" alt="" />
                  </div>
                  <div className="col l-8 m-6 c-12 content_info_item_text">
                    <h2>
                      Philips ra loạt đèn mới, tích hợp Spotify tạo hiệu ứng ánh
                      sáng khi chơi nhạc
                    </h2>
                    <span> Today, 14:37</span>
                    <p>
                      Bắt đầu từ hôm nay, người dùng Spotify có thể liên kết tài
                      khoản của họ với hệ sinh thái đèn thông minh của Philips
                      để tạo những hiệu ứng ánh sáng khi chơi nhạc tại nhà.
                    </p>
                  </div>
                </div>

                <div className="row border"  >
                  <div className="col l-4 m-6 c-12 content_info_item_image">
                    <img src="./image/content8.jpg" alt="" />
                  </div>
                  <div className="col l-8 m-6 c-12 content_info_item_text">
                    <h2>
                      Philips ra loạt đèn mới, tích hợp Spotify tạo hiệu ứng ánh
                      sáng khi chơi nhạc
                    </h2>
                    <span> Today, 14:37</span>
                    <p>
                      Bắt đầu từ hôm nay, người dùng Spotify có thể liên kết tài
                      khoản của họ với hệ sinh thái đèn thông minh của Philips
                      để tạo những hiệu ứng ánh sáng khi chơi nhạc tại nhà.
                    </p>
                  </div>
                </div>

                <div className="row border"  >
                  <div className="col l-4 m-6 c-12 content_info_item_image">
                    <img src="./image/content8.jpg" alt="" />
                  </div>
                  <div className="col l-8 m-6 c-12 content_info_item_text">
                    <h2>
                      Philips ra loạt đèn mới, tích hợp Spotify tạo hiệu ứng ánh
                      sáng khi chơi nhạc
                    </h2>
                    <span> Today, 14:37</span>
                    <p>
                      Bắt đầu từ hôm nay, người dùng Spotify có thể liên kết tài
                      khoản của họ với hệ sinh thái đèn thông minh của Philips
                      để tạo những hiệu ứng ánh sáng khi chơi nhạc tại nhà.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-4 c-12 m-12 content_info_right">
              <div className="content_info_right_item">
                <div className="content_info_right_item_img">
                  <img src="./image/content5.jpg" alt="" />
                </div>
                <p>
                  Trên tay Garmin Vivo Sport: Nhẹ, đeo như không đeo, GPS nhịp
                  tim đầy đủ, màn hình màu
                </p>
              </div>
              <div className="content_info_right_item">
                <div className="content_info_right_item_img">
                  <img src="./image/content8.jpg" alt="" />
                </div>
                <p>Đánh giá Honda CB500F 2018 giá 172 triệu mới về Việt Nam</p>
              </div>
              <div className="content_info_right_item">
                <div className="content_info_right_item_img">
                  <img src="./image/content9.jpg" alt="" />
                </div>
                <p>
                  Đánh giá Asus Zenfone Max Plus: Có gì đáng giá với mức 5,5
                  triệu
                </p>
              </div>

              <div className="content_info_right_item">
                <div className="content_info_right_item_img">
                  <img src="./image/content9.jpg" alt="" />
                </div>
                <p>
                  Đánh giá Asus Zenfone Max Plus: Có gì đáng giá với mức 5,5
                  triệu
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    );
  }
}

export default NewsTech;
