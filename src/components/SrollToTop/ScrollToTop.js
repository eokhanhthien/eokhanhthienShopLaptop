import { flatMap } from 'lodash';
import React, { Component } from 'react';
import "./ScrollToTop.css"
class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state={
            intervalId : 0,
            thePosition: false,
            oneclick:true,
        }
    }
    
    componentDidMount  = () => {
        document.addEventListener("scroll",()=>{
            if(window.scrollY > 170){
                this.setState({thePosition:true});
            }
            else{
                this.setState({thePosition:false});
            }
        });
        window.scrollTo(0,0);
    }

    onScrollStep  = () => {
        if(window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
            this.setState({oneclick:true});
        }
        window.scroll(0,window.pageYOffset - this.props.scrollStepInPx)
    }

    scrollToTop  = () => {
        let intervalId= setInterval(this.onScrollStep,this.props.delayInMs);
        this.setState({intervalId:intervalId,oneclick:false});
    }
    renderGoTopIcon  = () => {
        if(this.state.thePosition && this.state.oneclick==true){
        return (
            
            <div onClick={() => this.scrollToTop()} className="move_up_to_top">
                <i className="fas fa-arrow-alt-to-top icon_on_top"></i>
            </div>
            
        );}
    }
  render() { 
      return <div>{this.renderGoTopIcon()}</div> 
   }
}

export default ScrollToTop;