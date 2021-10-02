import React, { Component } from 'react';
import "./ShowImage.scss"

class ShowImage extends Component {
    render() {
        return (
            <section>
            <div className="container_showimage">
              <div className="carousel">
                <input type="radio" name="slides" defaultChecked="checked" id="slide-1" />
                <input type="radio" name="slides" id="slide-2" />
                <input type="radio" name="slides" id="slide-3" />
                <input type="radio" name="slides" id="slide-4" />
                <input type="radio" name="slides" id="slide-5" />
                <input type="radio" name="slides" id="slide-6" />
                <ul className="carousel__slides">
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src="./image/home_tn1.jpg" alt="" />
                      </div>
                      <figcaption>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span className="credit">Photo: Tim Marshall</span>
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src="./image/home_tn2.jpg" alt="" />
                      </div>
                      <figcaption>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span className="credit">Photo: Christian Joudrey</span>                            
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src="./image/home_tn3.jpg" alt="" />
                      </div>
                      <figcaption>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span className="credit">Photo: Steve Carter</span>                            
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src="./image/home_tn4.jpg" alt="" />
                      </div>
                      <figcaption>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span className="credit">Photo: Aleksandra Boguslawska</span>                            
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src="./image/home_tn5.jpg" alt="" />
                      </div>
                      <figcaption>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span className="credit">Photo: Rosan Harmens</span>                            
                      </figcaption>
                    </figure>
                  </li>
                  <li className="carousel__slide">
                    <figure>
                      <div>
                        <img src="./image/home_tn6.jpg" alt="" />
                      </div>
                      <figcaption>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span className="credit">Photo: Annie Spratt</span>                            
                      </figcaption>
                    </figure>
                  </li>
                </ul>    
                <ul className="carousel__thumbnails">
                  <li>
                    <label htmlFor="slide-1"><img src="./image/home_tn1.jpg" alt="" /></label>
                  </li>
                  <li>
                    <label htmlFor="slide-2"><img src="./image/home_tn2.jpg" alt="" /></label>
                  </li>
                  <li>
                    <label htmlFor="slide-3"><img src="./image/home_tn3.jpg" alt="" /></label>
                  </li>
                  <li>
                    <label htmlFor="slide-4"><img src="./image/home_tn4.jpg" alt="" /></label>
                  </li>
                  <li>
                    <label htmlFor="slide-5"><img src="./image/home_tn5.jpg" alt="" /></label>
                  </li>
                  <li>
                    <label htmlFor="slide-6"><img src="./image/home_tn6.jpg" alt="" /></label>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
        );
    }
}

export default ShowImage;