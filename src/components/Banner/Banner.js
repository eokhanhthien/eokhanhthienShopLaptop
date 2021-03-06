import React, { Component } from 'react';
import "./BannerCSS.css"

class Banner extends Component {
    componentDidMount  = () => {
        var Slider_image=document.querySelectorAll(".Slider_image")
        var dot = document.querySelectorAll(".dot")
        var btnSlider=document.querySelectorAll(".btnSlider")
        
        var current=0;
        var next=1;
        var prev=2;
        var timer = setInterval(autoTime,4000)

        function autoTime(){
            current++;
            if(current==3){
                current=0;
            }
            gotoNum(current);
        }
        
        
        
        function  cleartimer () {
            clearInterval(timer)
            timer=setInterval(timer,4000)
        }
        
        for(let i=0;i<btnSlider.length;i++){
            btnSlider[i].onclick = function(){
            if(i==0){
                gotoPrev(current-1);
                cleartimer();
                
            }
            else{
                gotoNext(current+1);
                cleartimer()
                
        }
        }
    }
        const gotoPrev  = () => {
            if(current>0){gotoNum(current-1)}
            else{gotoNum(Slider_image.length-1)}
        }
        const gotoNext  = () => {
            if(current<Slider_image.length-1){gotoNum(current+1)}
            else{gotoNum(0)}
        }
        
        const gotoNum  = (number) => {
            current=number;
            next=current+1;
            prev=current-1;
        
            if(next==3)
            {
                next=0
            
            }
            if(prev==-1)
            {
                prev=2
            }
        
            for(let i=0;i<Slider_image.length;i++){
                Slider_image[i].classList.remove("activebn")
                Slider_image[i].classList.remove("nextbn")
                Slider_image[i].classList.remove("prevbn")
               
            }
        
            for(let i=0;i<Slider_image.length;i++){
               dot[i].classList.remove("dot_ac")
            }
           
            dot[current].classList.add("dot_ac")
            Slider_image[current].classList.add("activebn")
            Slider_image[next].classList.add("nextbn")
            Slider_image[prev].classList.add("prevbn")
        
        }
        
          
    }

    render() {
        return (
            <div className="Slider">
            <div className="Slider_image activebn" ><img className="Slider_imagetransiton " src="./image/banner1.jpg" alt="" />
            <h2 className="Slider_image_text">C??ng ngh??? ti??n ti???n b???c nh???t
            <p>?????y m???nh ho???t ?????ng b??n h??ng m???i l??c, m???i n??i: Theo m???t th???ng k?? m???i nh???t th?? hi???n nay Vi???t Nam c?? kho???ng h??n 41 tri???u ng?????i d??ng internet, chi???m kho???ng 45% d??n s??? c??? n?????c trong ???? ph???n l???n l?? nh???ng ?????i t?????ng tr??? c?? nhu c???u mua s???m cao.</p>
            </h2>
            
            </div>

            <div className="Slider_image nextbn" ><img className="Slider_imagetransiton " src="./image/banner2.jpg" alt="" />
            <h2 className="Slider_image_text">??u ???? h???p d???n
            <p>??em ?????n ch?? kh??ch h??ng gi?? c??? t???t nh??t, uy tin lu??n ?????t l??n ?????u, ?????m b???o ch???t l?????ng, ??u ????i v?? quy???n l???i kh??ch h??ng</p>
            </h2>
            </div>

            <div className="Slider_image prevbn" ><img className="Slider_imagetransiton " src="./image/banner3.jpg" alt="" />
            <h2 className="Slider_image_text">Th???u hi???u t??m l?? kh??ch h??ng
            <p>??em ?????n ch?? kh??ch h??ng gi?? c??? t???t nh??t, uy tin lu??n ?????t l??n ?????u, ?????m b???o ch???t l?????ng, ??u ????i v?? quy???n l???i kh??ch h??ng</p>
           </h2> 
           </div>

           
            <div className="btnSlider"><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></div>
            <div className="btnSlider sliderNext"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></div>

            <div className="dot_container">
                <div className="dot dot_ac"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
          </div>

        );
    }
}

export default Banner;