import React, { Component } from 'react';
import "./BannerAuto.scss"
class BannerAuto extends Component {
    componentDidMount  = () => {
        // I will be creating a different pen with touch support but right // now I have no time for it due to school
const dot = document.querySelectorAll('.dot_banner');

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 3;  // tăng , 4 slide thì là 3
let next = 1;


// ----------------------------------------------------------Lặp lại-BEGIN ----------------------------------------------------------

let timer = setInterval(autoSlide, 3000);  //lặp lại cô hạn hàm autoSlide trong 8s
function autoSlide() {        //sau 8s lặp lại một lần nên counter sẽ tăng dẫn và thay đổi
	current += 1;
	if(current>3)  // tăng
	{
		current=0;
	}
	gotoNum(current);
}

function resetTimer() {   // sau khi ấn thì phải reset 8s từ đầu 
	clearInterval(timer);  //xóa một bộ định thời bằng phương thức setInterval ()  => Làm dừng thời gian để sét lại 8s
	timer = setInterval(autoSlide, 3000);
}

// ----------------------------------------------------------Lặp lại-END ----------------------------------------------------------



for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? [gotoPrev(),resetTimer()] : [gotoNext(),resetTimer()]);   // i==0 tứclà nút button[0] -> nút bên trái , các nút khác là bên phải
												// Cách return nhiều giá trị [a() , b()]
}

for (let i = 0; i < dot.length; i++) {
	dot[i].addEventListener("click", () =>  [gotoNum(i),resetTimer()]);   // i==0 tứclà nút button[0] -> nút bên trái , các nút khác là bên phải
												// Cách return nhiều giá trị [a() , b()]
}

//tăng ở số current < 3 ?
const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);   //  Tên hàm = tham số => biểu thức // tương đương với:
const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);				      //	function Tên hàm  (tham số)  {  return biểu thức; }
const gotoNum = number => {   
	current = number;
	prev = current - 1;
	next = current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("activebanner");
		slides[i].classList.remove("prevbanner");
		slides[i].classList.remove("nextbanner");
	}


	// Làm cho các 3 nút 
	for (let i = 0; i < dot.length; i++) {        //cho tất cả các nút có class= 'active' thành "  "
		dot[i].classList.remove("ac");
	}



	if (next == 4) {  //tăng
		next = 0;
	}

	if (prev == -1) {
		prev = 3;     //tăng
	}

	// Làm cho các 3 nút 
	// dot[current].className += " ac";
	dot[current].classList.add("ac");


	slides[current].classList.add("activebanner");
	slides[prev].classList.add("prevbanner");
	slides[next].classList.add("nextbanner");
}

    }
    render() {
        return (
            <div className="Banner">
            <div className="items">
              <div className="item activebanner">
                <img src="./image/content1.jpg" />
              </div>
              <div className="item nextbanner">
                <img src="./image/content2.jpg" />
              </div>
              <div className="item">
                <img src="./image/content3.jpg" />
              </div>
              {/* <!-- <div className="item">
                  <img src="./img/img5.jpeg">
              </div> --> */}
              <div className="item prevbanner">
                <img src="./image/content4.jpg" />
              </div>
            </div>
      
            <div className="button"><i className="fas fa-angle-left btn-nextprev-banner"></i></div>
            <div className="button btn-right"><i className="fas fa-angle-right btn-nextprev-banner"></i></div>
      
            
            <div className="dotsbox">
              <span className="dot_banner ac"></span>
              <span className="dot_banner"></span>
              <span className="dot_banner"></span>
              <span className="dot_banner"></span>
            {/* <span class="dot" onclick="currentSlide(4)"></span> */}
            {/* <span class="dot" onclick="currentSlide(5)"></span> --> */}
            </div>
          </div>
        );
    }
}

export default BannerAuto;