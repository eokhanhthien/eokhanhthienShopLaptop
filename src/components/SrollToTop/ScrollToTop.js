import { flatMap } from 'lodash';
import React, { Component } from 'react';
import "./ScrollToTop.css"
import { AnimatePresence, motion } from "framer-motion";


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
        const pageTransition = {
            hidden: {
              x:"400px",
              opacity: 0,
            //   transition: { duration: 0.2},

            },
            visible: {
              x:"0px",
              opacity: 1,
              transition: { ease: "anticipate",duration: 0.1},  //anticipate thực hiện trước khi chuyển động
            },
  
          };
   
        return (
            <AnimatePresence exitBeforeEnter>
           {(this.state.thePosition && this.state.oneclick==true) && 
           <motion.div 
           variants={pageTransition}
           initial="hidden"
           animate="visible"
           exit="hidden" 
           onClick={() => this.scrollToTop()} className="move_up_to_top">
                <i className="fas fa-arrow-alt-to-top icon_on_top"></i>
            </motion.div>}
          </AnimatePresence>
            
        );
    }
  render() { 
      return <div>{this.renderGoTopIcon()}</div> 
   }
}

export default ScrollToTop;